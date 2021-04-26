import { NextFunction, Request, Response } from "express";
const passport =  require("passport");
const jwt = require("jsonwebtoken");

export const registerUser = (req: Request & any, res: Response, next: NextFunction) => {
    passport.authenticate("local.signup", (err: any, user: any) => {
        if (err !== null) {
            return res.status(200).json({ err });
        }
        return res.status(200).json({user});
    })(req, res, next);
};

export const loginUser = (req: Request & any, res: Response, next: NextFunction) => {
    passport.authenticate("local.signin", (err: any, user: any, info: any) => {
        if (err !== null) {
            return res.status(200).json({ err });
        }
        return res.status(200).json({status: "SUCCESS", user});
    })(req, res, next);
};

export const logoutUser = (req: Request & any, res: Response) => {
    console.log("Intentando cerrar sesion: ");
    res.status(200).json({message: "Sesion cerrada"});
};
