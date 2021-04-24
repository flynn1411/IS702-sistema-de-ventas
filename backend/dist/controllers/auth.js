"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const jwt = require("jsonwebtoken");
exports.registerUser = (req, res, next) => {
    console.log("body: ", req.body);
    passport.authenticate("local.signup", (err, user) => {
        if (err !== null) {
            return res.status(200).json({ err });
        }
        return res.status(200).json({ user, token: jwt.sign({ user }, "my_secret_key") });
    })(req, res, next);
};
exports.loginUser = (req, res, next) => {
    passport.authenticate("local.signin", (err, user, info) => {
        if (err !== null) {
            return res.status(200).json({ err });
        }
        return res.status(200).json({ status: "SUCCESS", user, token: jwt.sign({ user }, "my_secret_key") });
    })(req, res, next);
};
exports.logoutUser = (req, res) => {
    console.log("Intentando cerrar sesion: ");
    res.status(200).json({ message: "Sesion cerrada" });
};
//# sourceMappingURL=auth.js.map