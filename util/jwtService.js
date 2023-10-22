const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    const jwtInfo = {sub: user.email};
    return jwt.sign(jwtInfo, process.env.JWT_SECRET, {expiresIn: "1d"});
}

module.exports = {generateToken};