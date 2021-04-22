"use strict";
const mysql = require("mysql");
const { database } = require("./keys");
const { promisify } = require("util"); // Convert callbacks to promises;
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
// Promisify POOL query.
pool.query = promisify(pool.query);
module.exports = pool;
//# sourceMappingURL=database.js.map