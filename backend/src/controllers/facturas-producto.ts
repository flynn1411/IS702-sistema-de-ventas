import { Request, Response } from "express";
const db = require("../database");

export const agregarFacturaProducto = (req: Request & any, res: Response) => {
    const product = req.body;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al crear facturaProducto", error: err });
    });
    console.log("result: ", result.then);
};

export const editarFacturaProducto = (req: Request & any, res: Response) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al editar facturaProducto", error: err });
    });
};

export const obtenerFacturaProducto = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener facturaProducto", error: err });
    });
};

export const eliminarFacturaProducto = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar facturaProducto", error: err });
    });
    console.log("result: ", result);
};
