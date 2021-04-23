import { Request, Response } from "express";
const db = require("../database");

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

export const editarProducto = (req: Request & any, res: Response) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al actualizar productor", error: err });
    });
};

export const obtenerProducto = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
};

export const obtenerProductos = (req: Request & any, res: Response) => {
    const query = "";
    const result = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
    console.log("result: ", result);
};

export const eliminarProducto = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al eliminar productor", error: err });
    });
};
