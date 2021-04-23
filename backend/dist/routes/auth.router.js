"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const AuthRouter = express_1.default.Router();
console.log("auth router");
AuthRouter.post("/login", auth_1.loginUser);
AuthRouter.post("/logout", auth_1.logoutUser);
module.exports = AuthRouter;
//# sourceMappingURL=auth.router.js.map