import jwt from "jsonwebtoken";
const isLoggedIn = async (req, res, next) => {
  try {
    // extracting token from the req.user
    const token = req.cookies?.accesstoken;
    console.log(token);
    // validate the token
    if (!token) {
      return res.status(400).json({
        message: "Invalid Token",
        success: false,
      });
    }
    // check if token is valid
    const decodedToken =  jwt.verify(token, process.env.ACCESS_JWT_SECRET);
    console.log(decodedToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
  next();
};

export default isLoggedIn;
