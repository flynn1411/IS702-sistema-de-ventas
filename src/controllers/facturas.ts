import { Request, Response } from "express";
const db = require("../db_connection");

export const agregarFactura = (req: Request & any, res: Response) => {
    const product = req.body;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al crear factura", error: err });
    });
    console.log("result: ", result.then);
};

export const editarFactura = (req: Request & any, res: Response) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al editar factura", error: err });
    });
};

export const obtenerFactura = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener factura", error: err });
    });
};

export const eliminarFactura = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar factura", error: err });
    });
    console.log("result: ", result);
};
