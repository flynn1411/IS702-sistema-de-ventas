import { Request, Response } from "express";
const db = require("../db_connection");

export const obtenerDirecciones = (req: Request & any, res: Response) => {
    console.log("obteniendo Direcciones: ");
    const query = "SELECT id, calle FROM Direcciones";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any[]) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener Direcciones", error: err });
    });
};
