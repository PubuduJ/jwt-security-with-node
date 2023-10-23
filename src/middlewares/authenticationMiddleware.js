const {UnauthorizedError} = require("../errors/errors");
const {verifyToken} = require("../util/jwtService");

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError("No token is provided");
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = verifyToken(token);
        req.user = {email: decoded.sub}
        next();
    } catch (error) {
        throw new UnauthorizedError("Not authorized to access this route");
    }
}

module.exports = authenticationMiddleware;