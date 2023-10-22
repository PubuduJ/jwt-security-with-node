const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors");
const {db} = require("./models/index");
const notFoundMiddleWare = require("./middlewares/notFound");
const authenticationMiddleWare = require("./middlewares/auth");
const errorHandlerMiddleWare = require("./middlewares/globalErrorHandler");
const auth = require("./routes/authRouter");
const demo = require("./routes/demoRouter");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", auth);
app.use(authenticationMiddleWare);
app.use("/api/demo-controller", demo);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

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