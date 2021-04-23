"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");
// Inicializaciones
require("./lib/passport");
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// Middlewares
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
/* app.use("/", (req, res) => {
    res.send("ROOT PATH CONNECTED");
}); */
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use("/api/v1", index_1.default);
module.exports = app;
//# sourceMappingURL=app.js.map