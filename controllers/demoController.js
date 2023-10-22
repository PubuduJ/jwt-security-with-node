const {StatusCodes} = require("http-status-codes");

const sayHello = (req, res) => {
    return res.status(StatusCodes.OK).send("Hello from secured end point");
}