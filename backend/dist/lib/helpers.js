"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const db = require("../database");
const fs = require("fs");
const readline = require("readline");
exports.encryptPassword = (password) => __awaiter(this, void 0, void 0, function* () {
    const salt = yield bcrypt.genSalt(10);
    const hash = yield bcrypt.hash(password, salt);
    return hash;
});
exports.matchPassword = (password, savedPassword) => __awaiter(this, void 0, void 0, function* () {
    try {
        return yield bcrypt.compare(password, savedPassword);
    }
    catch (e) {
        console.log(e);
    }
});
exports.addQuery = (query, res) => __awaiter(this, void 0, void 0, function* () {
    db.query(query, function (err, rows, fields) {
        if (!err) {
            console.log("success");
            console.log("rows: ", rows);
            console.log("fields: ", fields);
            res.status(200).send({ rows, fields, message: "success" });
        }
        else {
            console.log("Error while performing Query.");
            res.status(500).json({ message: err.message, error: err.code });
        }
    });
});
exports.getQuery = (query, res) => __awaiter(this, void 0, void 0, function* () {
    db.query(query, function (err, rows, fields) {
        if (!err) {
            console.log("success");
            console.log("rows: ", rows);
            console.log("fields: ", fields);
            res.status(200).send({ rows, fields, message: "success" });
        }
        else {
            console.log("Error while performing Query.");
            res.status(500).json({ message: err.message, error: err.code });
        }
    });
});
exports.removeQuery = (query, res) => __awaiter(this, void 0, void 0, function* () {
    db.query(query, function (err, rows, fields) {
        if (!err) {
            console.log("success");
            console.log("rows: ", rows);
            console.log("fields: ", fields);
            res.status(200).send({ rows, fields, message: "success" });
        }
        else {
            console.log("Error while performing Query.");
            res.status(500).json({ message: err.message, error: err.code });
        }
    });
});
exports.editQuery = (query, res) => __awaiter(this, void 0, void 0, function* () {
    db.query(query, function (err, rows, fields) {
        if (!err) {
            console.log("success");
            console.log("rows: ", rows);
            console.log("fields: ", fields);
            res.status(200).send({ rows, fields, message: "success" });
        }
        else {
            console.log("Error while performing Query.");
            res.status(500).json({ message: err.message, error: err.code });
        }
    });
});
exports.readAndExecuteSql = (fileName, pool) => {
    let ddl = "";
    let dbStatus = true;
    let actions = [];
    const rl = readline.createInterface({
        input: fs.createReadStream(`./public/scripts/${fileName}.sql`),
        terminal: false
    });
    rl.on("line", function (chunk) {
        ddl = ddl.concat(chunk.toString("ascii") + "\n");
        if (ddl.includes(";")) {
            actions = actions.concat(ddl);
            ddl = "";
        }
    });
    rl.on("close", function () {
        console.log(`read ${fileName} sql finished`);
        actions.forEach((sql) => {
            console.log("sql: ", sql);
            pool.query(sql, function (err, rows, fields) {
                if (err) {
                    dbStatus = false;
                    console.log("Code", err.code, err.message);
                }
            });
        });
        console.log(dbStatus ? `sql ${fileName} SUCCESS` : `${fileName} FAILED`);
        /* const result: Promise<any> = pool.query(ddl);
        result.then((resultP: any) => {
            console.log("Result: ", resultP);
        })
        .catch((err: any) => console.error("Error al ejecutar DDL: ", err)); */
        // pool.end();
    });
};
//# sourceMappingURL=helpers.js.map