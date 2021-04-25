import { Request, Response } from "express";
const db = require("../db_connection");

export const obtenerFabricantes = (req: Request & any, res: Response) => {
    console.log("obteniendo fabricantes: ");
    const query = "call sp_obtenerFabricante";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any[]) => {
        res.status(200).send(resultP[0]);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener Fabricantes", error: err });
    });
};
