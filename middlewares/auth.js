const jwt = require("jsonwebtoken");
const {UnauthorizedError} = require("../errors/errors");

const authenticationMiddleWare = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError("No token is provided");
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {email: decoded.sub}
        next();
    } catch (error) {
        throw new UnauthorizedError("Not authorized to access this route");
    }
}

module.exports = authenticationMiddleWare;