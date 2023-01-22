const jtw = require("jsonwebtoken");

let checkAuth = (req,res,next) => {

    let token;
    try {
      token = req.headers.authorization.split(" ")[1];
    } catch (e) {
      return res.status(401).json({
        message: "You need a token to access this resource.",
      });
    }
    try {
      return jwt.verify(token, config.jwtkey, (err, decoded) => {
        if (err) throw new Error(err); // Manage different errors here (Expired, untrusted...)
        next();
      });
    } catch (e) {
      return res.status(401).json({
        name: "Token Expired Error",
        message: "Token expired",
      });
    }
}

module.exports = {
    checkAuth
}