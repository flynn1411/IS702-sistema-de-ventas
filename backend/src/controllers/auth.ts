import { NextFunction, Request, Response } from "express";
const passport =  require("passport");
const jwt = require("jsonwebtoken");

export const registerUser = (req: Request & any, res: Response, next: NextFunction) => {
    passport.authenticate("local.signup", (err: any, user: any, info: any) => {
        console.log("err auth: ", err);
        console.log("info auth: ", info);
        console.log("user auth: ", user);
        if (err) {
            return next(err);
        }
        return res.status(200).json({user, info});
    })(req, res, next);
};

export const loginUser = (req: Request & any, res: Response, next: NextFunction) => {
    passport.authenticate("local.signin", (err: any, user: any, info: any) => {
        console.log("err auth: ", err);
        console.log("info auth: ", info);
        console.log("user auth: ", user);
        if (err) {
            return res.status(200).json({user: false, message: info});
        }
        if (!user) {
            return res.status(200).json({user: false, message: "El correo no esta registrado"});
        }
        return res.status(200).json({user, info});
    })(req, res, next);
};

export const logoutUser = (req: Request & any, res: Response) => {
    console.log("Intentando cerrar sesion: ");
    res.status(200).json({message: "Sesion cerrada"});
};
