import { Request, Response } from "express";
const db = require("../db_connection");

export const obtenerTipos = (req: Request & any, res: Response) => {
    console.log("obteniendo Tipos: ");
    const query = "call sp_obtenerTipo";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any[]) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener Tipo", error: err });
    });
};
