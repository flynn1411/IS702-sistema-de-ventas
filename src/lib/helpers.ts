const bcrypt = require("bcryptjs");
const db = require("../db_connection");
const fs = require("fs");
const readline = require("readline");
import { Request, Response } from "express";

export const encryptPassword = async (password: any) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const matchPassword = async (password: any, savedPassword: any) => {
  try {
    return await bcrypt.compare(password, savedPassword);
  } catch (e) {
    console.log(e);
  }
};

export const addQuery = async (query: string, res: Response) => {
  db.query(query, function(err: any, rows: any, fields: any) {
    if (!err) {
        console.log("success");
        console.log("rows: ", rows);
        console.log("fields: ", fields);
        res.status(200).send({rows, fields, message: "success"});
    } else {
        console.log("Error while performing Query.");
        res.status(500).json({ message: err.message, error: err.code });
    }
  });
};

export const getQuery = async (query: string, res: Response) => {
  db.query(query, function(err: any, rows: any, fields: any) {
    if (!err) {
        console.log("success");
        console.log("rows: ", rows);
        console.log("fields: ", fields);
        res.status(200).send({rows, fields, message: "success"});
    } else {
        console.log("Error while performing Query.");
        res.status(500).json({ message: err.message, error: err.code });
    }
  });
};

export const removeQuery = async (query: string, res: Response) => {
  db.query(query, function(err: any, rows: any, fields: any) {
    if (!err) {
        console.log("success");
        console.log("rows: ", rows);
        console.log("fields: ", fields);
        res.status(200).send({rows, fields, message: "success"});
    } else {
        console.log("Error while performing Query.");
        res.status(500).json({ message: err.message, error: err.code });
    }
  });
};

export const editQuery = async (query: string, res: Response) => {
  db.query(query, function(err: any, rows: any, fields: any) {
    if (!err) {
        console.log("success");
        console.log("rows: ", rows);
        console.log("fields: ", fields);
        res.status(200).send({rows, fields, message: "success"});
    } else {
        console.log("Error while performing Query.");
        res.status(500).json({ message: err.message, error: err.code });
    }
  });
};

export const readAndExecuteSql = (fileName: string, pool: any) => {
  let ddl: string = "";
  let dbStatus = true;
  let actions: string[] = [];
  const rl: any = readline.createInterface({
      input: fs.createReadStream(`./public/scripts/${fileName}.sql`),
      terminal: false
  });
  rl.on("line", function(chunk: any) {
      ddl = ddl.concat(chunk.toString("ascii") + "\n");
      if (ddl.includes(";")) {
          actions = actions.concat(ddl);
          ddl = "";
      }
    });
  rl.on("close", function() {
      console.log(`read ${fileName} sql finished`);
      actions.forEach((sql: string) => {
        console.log("sql: ", sql);
        pool.query(sql, function(err: any, rows: any, fields: any) {
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
