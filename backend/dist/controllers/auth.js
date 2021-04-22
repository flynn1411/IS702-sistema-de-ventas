"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const jwt = require("jsonwebtoken");
exports.registerUser = (req, res, next) => {
    console.log("Intentando registrar usuario: ");
    passport.authenticate("local.signup", (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json(info);
        }
        return res.status(200).json({ user_: user });
    })(req, res, next);
    // res.status(200).json({message: "Usario registrado"});
};
exports.loginUser = (req, res, next) => {
    console.log("login body: ", req.body);
    if (!req.body.username) {
        return res.status(400).json({ error: "username_required" });
    }
    if (!req.body.password) {
        return res.status(400).json({ error: "password_required" });
    }
    passport.authenticate("local.signup", (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json(info);
        }
        return res.status(200).json({ user, token: user.generateJwt(user) });
    })(req, res, next);
};
exports.logoutUser = (req, res) => {
    console.log("Intentando cerrar sesion: ");
    res.status(200).json({ message: "Sesion cerrada" });
};
//# sourceMappingURL=auth.js.map