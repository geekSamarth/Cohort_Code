const isLoggedIn = async (req, res, next) => {
  try {
    // extracting token from the req.user
    const token = req.cookies.token;
    // validate the token
    if (!token) {
      res.status(400).json({
        message: "Invalid Token",
      });
    }
    // check if token is valid
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default isLoggedIn;
