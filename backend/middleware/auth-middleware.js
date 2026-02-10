const jwt = require("jsonwebtoken");
const User = require('../models/user');
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const token = authHeader.slice(7);

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const presentInDB = await User.findOne({
          $or: [{ email: decodedToken.email }, { username: decodedToken.username }],
        });
    if(!presentInDB){
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    req.user = decodedToken;
    return next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;