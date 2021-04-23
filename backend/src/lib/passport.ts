const passport = require("passport");
import { Request, Response } from "express";

const localStrategy = require("passport-local").Strategy;
import * as helpers from "./helpers";

const db = require("../database");
passport.use(
    "local.signup",
    new localStrategy(
      {
        usernameField: "correo",
        passwordField: "contrasena",
        passReqToCallback: true,
      },
      async (req: Request & any, correo: string, contrasena: string, done: any) => {
        const body = req.body;
        console.log("passport: ");
        const newUser: any = Object.assign({
          correo,
          contrasena,
        }, req.body);
        const rows = await db.query("SELECT * FROM Usuarios WHERE correo = ?", [
          correo,
        ]);
        console.log("rows: ", rows);
        if (rows.length === 0) {
          newUser.contrasena = await helpers.encryptPassword(contrasena);
          db.query("INSERT INTO Usuarios SET ? ", newUser, (err: any, res: any) => {
            console.log("res add user: ", res);
            if (err) {
              console.error("Error al agregar usuario: ", err.code, err.sqlMessage);
              done({error: err.code, message: err.sqlMessage}, null, null);
              return;
            } else {
              newUser.id = res.insertId;
              done(null, newUser, res);
            }
          });
        } else {
          done(null, undefined, {status: "failed", message: "Ya hay un usuario registrado con el correo" });
        }
        /* newUser.id = result.insertId;
        result.then((resultP: any) => {
          res.status(200).send({result: resultP});
        })
        .catch((err: any) => {
          res.status(500).json({ message: "Error al crear OrdenCompra", error: err });
        });
        return done(null, newUser); */
      }
    )
);

passport.use(
  "local.signin",
  new localStrategy(
    {
      usernameField: "correo",
      passwordField: "contrasena",
      passReqToCallback: true,
    },
    async (req: Request & any, correo: string, contrasena: string, done: any) => {
      const rows = await db.query("SELECT * FROM Usuarios WHERE correo = ?", [
        correo,
      ]);
      if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(
          correo,
          user.contrasena
        );
        console.log("valid password: ", validPassword);
        if (validPassword) {
          done(null, user, {status: "success", message: "Credenciales correctos " + user.correo});
        } else {
          done(null, user, { status: "failed", message: "Contrasena incorrecta"});
        }
      } else {
        return done(
          null,
          false,
          { status: "failed", message: "No existe el correo" }
        );
      }
    }
  )
);
