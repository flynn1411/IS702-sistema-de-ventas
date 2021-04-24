import { Request, Response } from "express";
const db = require("../db_connection");

export const agregarInventario = (req: Request & any, res: Response) => {
    const product = req.body;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al crear Inventario", error: err });
    });
    console.log("result: ", result.then);
};

export const editarInventario = (req: Request & any, res: Response) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al editar Inventario", error: err });
    });
};

export const obtenerInventario = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener Inventario", error: err });
    });
};

export const eliminarInventario = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar Inventario", error: err });
    });
    console.log("result: ", result);
};
