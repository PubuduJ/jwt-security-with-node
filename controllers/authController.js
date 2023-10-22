const register = async (req, res) => {
    res.send("Register User");
}

const authenticate = async (req, res) => {
    res.send("Authenticate User");
}

module.exports = {register, authenticate};