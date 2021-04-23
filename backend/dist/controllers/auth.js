"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const jwt = require("jsonwebtoken");
exports.registerUser = (req, res, next) => {
    passport.authenticate("local.signup", (err, user, info) => {
        console.log("err auth: ", err);
        console.log("info auth: ", info);
        console.log("user auth: ", user);
        if (err) {
            return next(err);
        }
        return res.status(200).json({ user, info });
    })(req, res, next);
};
exports.loginUser = (req, res, next) => {
    passport.authenticate("local.signin", (err, user, info) => {
        console.log("err auth: ", err);
        console.log("info auth: ", info);
        console.log("user auth: ", user);
        if (err) {
            return res.status(200).json({ user: false, message: info });
        }
        if (!user) {
            return res.status(200).json({ user: false, message: "El correo no esta registrado" });
        }
        return res.status(200).json({ user, info });
    })(req, res, next);
};
exports.logoutUser = (req, res) => {
    console.log("Intentando cerrar sesion: ");
    res.status(200).json({ message: "Sesion cerrada" });
};
//# sourceMappingURL=auth.js.map