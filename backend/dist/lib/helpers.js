"use strict";
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
exports.readAndExecuteSql = exports.editQuery = exports.removeQuery = exports.getQuery = exports.addQuery = exports.matchPassword = exports.encryptPassword = void 0;
const bcrypt = require("bcryptjs");
const db = require("../db_connection");
const fs = require("fs");
const readline = require("readline");
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt.genSalt(10);
    const hash = yield bcrypt.hash(password, salt);
    return hash;
});
exports.encryptPassword = encryptPassword;
const matchPassword = (password, savedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield bcrypt.compare(password, savedPassword);
    }
    catch (e) {
        console.log(e);
    }
});
exports.matchPassword = matchPassword;
const addQuery = (query, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.addQuery = addQuery;
const getQuery = (query, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.getQuery = getQuery;
const removeQuery = (query, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.removeQuery = removeQuery;
const editQuery = (query, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.editQuery = editQuery;
const readAndExecuteSql = (fileName, pool) => {
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
exports.readAndExecuteSql = readAndExecuteSql;
//# sourceMappingURL=helpers.js.map