const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// const routes = require('./routes');

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("database connection establised"));

const PORT = process.env.PORT || 5000;

// app.use("/", routes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`The application has been started at ${PORT}`);
});

module.exports = app;
