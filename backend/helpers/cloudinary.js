const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
  secure: true,
});
const uploadMediaToCloudinary = async (filePath, existingPublicId = null) => {
  try {
    const options = {
      resource_type: "auto", // Automatically detects image vs video
      // If public_id is provided, Cloudinary swaps the file at that ID
      public_id: existingPublicId || undefined, 
      overwrite: !!existingPublicId,
      invalidate: true, // Clears the CDN cache for this specific public_id
    };

    const result = await cloudinary.uploader.upload(filePath, options);

    // Generate the optimized URL
    // We include 'version' to bypass browser-side caching
    const url = cloudinary.url(result.public_id, {
      resource_type: result.resource_type,
      transformation: [
        { fetch_format: "auto", quality: "auto" }
      ],
      version: result.version, // Adding the version timestamp is key for "Replace"
      secure: true
    });

    console.log("Media processed. Type:", result.resource_type);
    return { ...result, url };
  } catch (error) {
    console.error("Cloudinary Error:", error.message);
    throw new Error("Cloudinary upload failed");
  }
};

const deleteMediaFromCloudinary = async (publicId) => {
  try {
    const [videoResult, imageResult] = await Promise.all([
      cloudinary.uploader.destroy(publicId, { resource_type: "video" }),
      cloudinary.uploader.destroy(publicId, { resource_type: "image" })
    ]);

    if (videoResult.result === 'ok' || imageResult.result === 'ok') {
      return { result: 'ok' };
    }

    return { result: 'not found' };
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
    return null;
  }
};
module.exports = { uploadMediaToCloudinary, deleteMediaFromCloudinary };
