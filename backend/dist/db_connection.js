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
const mysql = require("mysql");
const { database } = require("./db_config");
const { promisify } = require("util"); // Convert callbacks to promises;
const pool = mysql.createPool(database);
pool.getConnection((err, connection) => __awaiter(void 0, void 0, void 0, function* () {
    if (err !== null) {
        console.error("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        console.error("           DATABASE CONNECTION ERROR");
        console.error("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        if (err.code === "PROTOCOLO_CONNECTION_LOST") {
            console.error("DataBase connection was closed");
        }
        else if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("DataBase has many connections");
        }
        else if (err.code === "ECONNREFUSED") {
            console.error("DataBase connection was refused");
        }
        else if (err.code === "ER_BAD_DB_ERROR") {
            console.error(err.sqlMessage);
        }
        else {
            console.error("Undefined error: ", err.code, err.sqlMessage);
        }
    }
    if (connection) {
        console.log(("successful connection to the %s DataBase"), database.database);
        connection.release();
    }
    return;
}));
// Promisify POOL query.
pool.query = promisify(pool.query);
module.exports = pool;
//# sourceMappingURL=db_connection.js.map