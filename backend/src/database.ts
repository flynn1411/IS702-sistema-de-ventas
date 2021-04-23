const mysql = require("mysql");
const { database } = require("./keys");
const { promisify } = require("util"); // Convert callbacks to promises;

import { readAndExecuteSql } from "./lib/helpers";

const pool = mysql.createPool(database);
pool.getConnection(async (err: any, connection: any) => {
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
        const result2 = await pool.query("call sp_obtenerFabricante ");
        console.log("result2", result2);
        connection.release();
    }
    return;
});

// Promisify POOL query.
pool.query = promisify(pool.query);
module.exports = pool;
