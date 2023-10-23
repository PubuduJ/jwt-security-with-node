const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors");
const {db} = require("./models");
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const authenticationMiddleware = require("./middlewares/authenticationMiddleware");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");
const auth = require("./routes/authRouter");
const demo = require("./routes/demoRouter");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", auth);
app.use(authenticationMiddleware);
app.use("/api/demo-controller", demo);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = Number(process.env.PORT);

const startServer = async () => {
    try {
        await db.sequelize.authenticate();
        console.log("Database connection successful");
        // start the Express server
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}....`);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

startServer().then(() => {});