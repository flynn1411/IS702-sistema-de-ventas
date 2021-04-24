import { Request, Response } from "express";
const db = require("../db_connection");

export const agregarProducto = (req: Request & any, res: Response) => {
    const product = req.body;
    const query = "";
    const result: Promise<any> = db.query(query, product);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al crear producto", error: err });
    });
};

export const obtenerProductos = (req: Request & any, res: Response) => {
    console.log("obtener productos");
    const query = "call sp_obtenerProductoInventario";
    const result = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
    console.log("result: ", result);
};
