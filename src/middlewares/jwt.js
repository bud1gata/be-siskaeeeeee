const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.TOKEN_SECRET

exports.verify = (req, res, next) => {
  const token = req.headers['x-access-token'];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if(err){
      return res.status(402)
        .json({ success: false, message: "Invalid Token"})
    }

    req.userId = decoded.id;
    next();
  })
}

exports.generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' })
}