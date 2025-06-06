import jwt from "jsonwebtoken";
const isLoggedIn = async (req, res, next) => {
  try {
    // extracting token from the req.user
    const token = req.cookies?.accessToken;
    // validate the token
    if (!token) {
      res.status(400).json({
        message: "Invalid Token",
        success: false,
      });
    }
    // check if token is valid
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
  next();
};

export default isLoggedIn;
