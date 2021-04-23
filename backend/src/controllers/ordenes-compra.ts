import { Request, Response } from "express";
const db = require("../database");

export const agregarOrdenCompra = (req: Request & any, res: Response) => {
    const product = req.body;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al crear OrdenCompra", error: err });
    });
    console.log("result: ", result.then);
};

export const editarOrdenCompra = (req: Request & any, res: Response) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al editar OrdenCompra", error: err });
    });
};

export const obtenerOrdenCompra = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener OrdenCompra", error: err });
    });
};

export const eliminarOrdenCompra = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar OrdenCompra", error: err });
    });
    console.log("result: ", result);
};
