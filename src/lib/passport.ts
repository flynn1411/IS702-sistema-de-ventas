const passport = require("passport");
import { Request, Response } from "express";

const localStrategy = require("passport-local").Strategy;
import * as helpers from "./helpers";

const db = require("../db_connection");
passport.use(
    "local.signup", new localStrategy({
      usernameField: "correo",
      passwordField: "contrasena",
      passReqToCallback: true,
    }, async (req: Request & any, correo: string, contrasena: string, done: any) => {
      const body = req.body;
      const newUser: any = Object.assign({
        correo,
        contrasena,
      }, body);
      const rows = await db.query("call sp_obtenerUsuario(?)", correo );
      if (rows[0].length === 0) {
        newUser.contrasena = await helpers.encryptPassword(contrasena);
        db.query("INSERT INTO Usuarios SET ? ", newUser, (err: any, res: any) => {
          if (err) {
            done({status: "FAILED", message: `${err.code} - ${err.message}`}, null);
            return;
          } else {
            newUser.id = res.insertId;
            done(null, newUser);
          }
        });
      } else {
        done({status: "failed", message: "Ya hay un usuario registrado con el correo" }, null);
      }
        /* ! Dejar bloque | alternativa al uso del callback
        newUser.id = result.insertId;
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
      const rows = await db.query(`call sp_obtenerUsuario( ? )`, correo);
      if (rows.length > 0) {
        const user = rows[0][0];
        console.log("user: ", user);
        console.log("pass1: ", user.contrasena);
        console.log("pass2: ", contrasena);
        const validPassword = await helpers.matchPassword(
          contrasena,
          user.contrasena
        );
        console.log("valid password: ", validPassword);
        if (validPassword) {
          done(null, user);
        } else {
          done({ status: "FAILED", message: "Contrasena incorrecta" }, null);
        }
      } else {
        return done(
          { status: "FAILED", message: "No existe el correo" },
          null,
        );
      }
    }
  )
);
