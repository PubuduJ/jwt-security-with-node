const {db} = require("../models");
const {StatusCodes} = require("http-status-codes");
const {hashPassword, checkPassword} = require("../util/bycryptService");
const {generateToken} = require("../util/jwtService");
const {ConflictError, UnauthorizedError} = require("../errors/errors");

const User = db.users;
const sequelize = db.sequelize;

const register = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const availability = await User.findOne({where: {email: req.body.email}});
        if (!availability) {
            const user = req.body;
            user.role = "USER";
            user.password = await hashPassword(user.password);
            await User.create(user);
            const token = generateToken(user);
            await t.commit();
            return res.status(StatusCodes.CREATED).json({token: token});
        }
        throw new ConflictError("User already exit in the database");
    } catch (error) {
        await t.rollback();
        throw error;
    }
}

const authenticate = async (req, res) => {
    const user = await User.findOne({where: {email: req.body.email}});
    if (user) {
        const isValid = await checkPassword(req.body.password, user.password);
        if (isValid) {
            const token = generateToken(user);
            return res.status(StatusCodes.OK).json({token: token});
        }
        throw new UnauthorizedError("Invalid username or password");
    }
    throw new UnauthorizedError("Invalid username or password");
}

module.exports = {register, authenticate};