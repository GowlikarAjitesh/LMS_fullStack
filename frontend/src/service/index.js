import axiosInstance from "@/api/axiosInstance";

export async function mediaUploadService(formData, onProgressCallback) {
  const { data } = await axiosInstance.post("/api/instructor/media/upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });
  console.log("Media service = ", data);
  return data;
}

export async function mediaDeleteService(public_id) {
  const { data } = await axiosInstance.delete(`/api/instructor/media/delete/${public_id}`);
  return data;
}