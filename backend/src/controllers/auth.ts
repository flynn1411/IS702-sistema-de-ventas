import { NextFunction, Request, Response } from "express";
const passport =  require("passport");
const jwt = require("jsonwebtoken");

export const registerUser = (req: Request & any, res: Response, next: NextFunction) => {
    console.log("Intentando registrar usuario: ");
    passport.authenticate("local.signup", (err: any, user: any, info: any) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).json(info);
        }
        return res.status(200).json({user_: user});
    })(req, res, next);
    // res.status(200).json({message: "Usario registrado"});
};

export const loginUser = (req: Request & any, res: Response, next: NextFunction) => {
    console.log("login body: ", req.body);
    if (!req.body.username) {
        return res.status(400).json({ error: "username_required" });
    }

    if (!req.body.password) {
        return res.status(400).json({ error: "password_required" });
    }

    passport.authenticate("local.signup", (err: any, user: any, info: any) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).json(info);
        }
        return res.status(200).json({user, token: user.generateJwt(user)});
    })(req, res, next);
};

export const logoutUser = (req: Request & any, res: Response) => {
    console.log("Intentando cerrar sesion: ");
    res.status(200).json({message: "Sesion cerrada"});
};
