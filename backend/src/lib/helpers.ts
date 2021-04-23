const bcrypt = require("bcryptjs");
const db = require("../database");
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
