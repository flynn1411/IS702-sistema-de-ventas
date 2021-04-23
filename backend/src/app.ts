import express from "express";
import path from "path";
import indexRouter from "./routes/index";

const app = express();
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");

// Inicializaciones
require("./lib/passport");
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
/* app.use("/", (req, res) => {
    res.send("ROOT PATH CONNECTED");
}); */
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use("/api/v1", indexRouter);

module.exports = app;
