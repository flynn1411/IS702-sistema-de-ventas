"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.loginUser = exports.registerUser = void 0;
const passport = require("passport");
const jwt = require("jsonwebtoken");
<<<<<<< HEAD
exports.registerUser = (req, res, next) => {
    console.log("body: ", req.body);
=======
const registerUser = (req, res, next) => {
    //console.log(req.body);
>>>>>>> b6043947b0da2af6c7fca76ad1c8457db5569b48
    passport.authenticate("local.signup", (err, user) => {
        if (err !== null) {
            return res.status(200).json({ err });
        }
        return res.status(200).json({ user, token: jwt.sign({ user }, "my_secret_key") });
    })(req, res, next);
};
exports.registerUser = registerUser;
const loginUser = (req, res, next) => {
    passport.authenticate("local.signin", (err, user, info) => {
        if (err !== null) {
            return res.status(200).json({ err });
        }
        return res.status(200).json({ status: "SUCCESS", user, token: jwt.sign({ user }, "my_secret_key") });
    })(req, res, next);
};
exports.loginUser = loginUser;
const logoutUser = (req, res) => {
    console.log("Intentando cerrar sesion: ");
    res.status(200).json({ message: "Sesion cerrada" });
};
exports.logoutUser = logoutUser;
//# sourceMappingURL=auth.js.map