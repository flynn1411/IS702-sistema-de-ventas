"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
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
}, (req, correo, contrasena, done) => __awaiter(this, void 0, void 0, function* () {
    const body = req.body;
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
}, (req, correo, contrasena, done) => __awaiter(this, void 0, void 0, function* () {
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