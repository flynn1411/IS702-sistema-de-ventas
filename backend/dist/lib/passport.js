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
const db = require("../database");
/* passport.use("local.signup", new localStrategy({
    usernameField: "username",
    // tslint:disable-next-line:object-literal-sort-keys
    passwordField: "password",
    passReqToCallback: true
}, async (req: any, username: string, password: string, done: any) => {
    const user = {
        username,
        password
    };
    // await db.query("INSERT INTO Users(username, password) VALUES");
    console.log("body strategy: ", req.body);
})); */
passport.use("local.signup", new localStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true,
}, (req, username, password, done) => __awaiter(this, void 0, void 0, function* () {
    // const { fullname } = req.body;
    const newUser = {
        username,
        password,
    };
    newUser.password = yield helpers.encryptPassword(password);
    console.log("body: ", req.body);
    // Saving in the Database
    const result = yield db.query("INSERT INTO Users SET ? ", newUser);
    newUser.id = result.insertId;
    return done(null, newUser);
})));
/* passport.serializeUser((usr, done) => {

}) */
//# sourceMappingURL=passport.js.map