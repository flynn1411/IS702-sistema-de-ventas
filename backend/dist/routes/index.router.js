"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const auth_router_1 = __importDefault(require("./auth.router"));
console.log("index router");
const router = express_1.default.Router();
const db = require("../database");
router.use("/auth", auth_router_1.default);
module.exports = router;
//# sourceMappingURL=index.router.js.map