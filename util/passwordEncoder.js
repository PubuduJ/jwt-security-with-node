const bcrypt = require("bcrypt");
const saltRounds = 10;

const passwordEncoder = async (password) => {
    return await bcrypt.hash(password, saltRounds);
}

module.exports = passwordEncoder;