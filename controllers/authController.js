const {db} = require("../models/index");
const {StatusCodes} = require("http-status-codes");
const passwordEncoder = require("../util/passwordEncoder");
const {generateToken} = require("../util/jwtService");
const {ConflictError, BadRequestError} = require("../errors/errors");

const User = db.users;
const sequelize = db.sequelize;

const register = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const availability = await User.findOne({where: {email: req.body.email}});
        if (!availability) {
            const user = req.body;
            user.role = "USER";
            user.password = await passwordEncoder(user.password);
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
        const token = generateToken(user);
        return res.status(StatusCodes.OK).json({token: token});
    }
    throw new BadRequestError("User does not exist");
}

module.exports = {register, authenticate};