"use strict";
const mysql = require("mysql");
const { database } = require("./keys");
const { promisify } = require("util"); // Convert callbacks to promises;
const fs = require("fs");
const readline = require("readline");
const pool = mysql.createPool(database);
pool.getConnection((err, connection) => {
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
        connection.release();
    }
    console.log(("  successful connection to the %s DataBase"), database.database);
    return;
});
const rl = readline.createInterface({
    input: fs.createReadStream("./public/scripts/tables.sql"),
    terminal: false
});
let ddl = "";
let actions = [];
rl.on("line", function (chunk) {
    console.log("chuncl: ", chunk);
    ddl = ddl.concat(chunk.toString("ascii") + "\n");
    if (ddl.includes(";")) {
        actions = actions.concat(ddl);
        ddl = "";
    }
    /* pool.query(chunk.toString("ascii"), function(err: any, sets: any, fields: any) {
        if (err) {
            console.log(err);
        }
    }); */
});
rl.on("close", function () {
    console.log("finished");
    console.log("ddl: ", ddl);
    console.log("actions: ", actions);
    actions.forEach((sql) => {
        pool.query(sql, function (err, rows, fields) {
            if (!err) {
                console.log("success");
                console.log("rows: ", rows);
                console.log("fields: ", fields);
            }
            else {
                console.log("Error while performing Query.");
                console.log("Code", err.code);
                console.log("message", err.message);
            }
        });
    });
    /* const result: Promise<any> = pool.query(ddl);
    result.then((resultP: any) => {
        console.log("Result: ", resultP);
    })
    .catch((err: any) => console.error("Error al ejecutar DDL: ", err)); */
    // pool.end();
});
// Promisify POOL query.
pool.query = promisify(pool.query);
module.exports = pool;
//# sourceMappingURL=database.js.map