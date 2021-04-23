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
const mysql = require("mysql");
const { database } = require("./keys");
const { promisify } = require("util"); // Convert callbacks to promises;
const pool = mysql.createPool(database);
pool.getConnection((err, connection) => __awaiter(this, void 0, void 0, function* () {
    if (err) {
        if (err.code === "PROTOCOLO_CONNECTION_LOST") {
            console.error("DataBase connection was closed");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("DataBase has many connections");
        }
        if (err.code === "ECONNREFUSED") {
            console.error("DataBase connection was refused");
        }
    }
    if (connection) {
        console.log(("successful connection to the %s DataBase"), database.database);
        const result2 = yield pool.query("call sp_obtenerFabricante ");
        console.log("result2", result2);
        connection.release();
    }
    return;
}));
// Promisify POOL query.
pool.query = promisify(pool.query);
module.exports = pool;
//# sourceMappingURL=database.js.map