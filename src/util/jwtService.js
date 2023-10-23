const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    const jwtInfo = {sub: user.email};
    return jwt.sign(jwtInfo, process.env.JWT_SECRET, {expiresIn: "1d"});
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {generateToken, verifyToken};