const passport = require("passport");

const localStrategy = require("passport-local").Strategy;
import * as helpers from "./helpers";

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

passport.use(
    "local.signup",
    new localStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req: Request, username: string, password: string, done: any) => {
        // const { fullname } = req.body;

        const newUser: any = {
          username,
          password,
        };

        newUser.password = await helpers.encryptPassword(password);
        console.log("body: ", req.body);
        // Saving in the Database
        const result = await db.query("INSERT INTO Users SET ? ", newUser);
        newUser.id = result.insertId;
        return done(null, newUser);
      }
    )
  );
/* passport.serializeUser((usr, done) => {

}) */
