const {StatusCodes} = require("http-status-codes");

const sayHello = (req, res) => {
    console.log(req.user);
    return res.status(StatusCodes.OK).send("Hello from secured end point");
}

module.exports = {sayHello};