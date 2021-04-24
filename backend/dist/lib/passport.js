"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const helpers = __importStar(require("./helpers"));
const db = require("../db_connection");
passport.use("local.signup", new localStrategy({
    usernameField: "correo",
    passwordField: "contrasena",
    passReqToCallback: true,
}, (req, correo, contrasena, done) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log("correo: " + correo);
    console.log("contrasenia: " + contrasena);
    console.log("body: " + body);
    const newUser = Object.assign({
        correo,
        contrasena,
    }, body);
    const rows = yield db.query("SELECT * FROM Usuarios WHERE correo = ?", correo);
    if (rows.length === 0) {
        newUser.contrasena = yield helpers.encryptPassword(contrasena);
        db.query("INSERT INTO Usuarios SET ? ", newUser, (err, res) => {
            if (err) {
                done({ status: "FAILED", message: `${err.code} - ${err.message}` }, null);
                return;
            }
            else {
                newUser.id = res.insertId;
                done(null, newUser);
            }
        });
    }
    else {
        done({ status: "failed", message: "Ya hay un usuario registrado con el correo" }, null);
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
})));
passport.use("local.signin", new localStrategy({
    usernameField: "correo",
    passwordField: "contrasena",
    passReqToCallback: true,
}, (req, correo, contrasena, done) => __awaiter(void 0, void 0, void 0, function* () {
    const rows = yield db.query("SELECT * FROM Usuarios WHERE correo = ?", [
        correo,
    ]);
    if (rows.length > 0) {
        const user = rows[0];
        const validPassword = yield helpers.matchPassword(contrasena, user.contrasena);
        console.log("valid password: ", validPassword);
        if (validPassword) {
            done(null, user);
        }
        else {
            done({ status: "FAILED", message: "Contrasena incorrecta" }, null);
        }
    }
    else {
        return done({ status: "FAILED", message: "No existe el correo" }, null);
    }
})));
//# sourceMappingURL=passport.js.map