"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const AuthRouter = express_1.Router();
AuthRouter.post("/register", auth_1.registerUser);
AuthRouter.post("/login", auth_1.loginUser);
AuthRouter.post("/logout", auth_1.logoutUser);
exports.default = AuthRouter;
//# sourceMappingURL=auth.js.map