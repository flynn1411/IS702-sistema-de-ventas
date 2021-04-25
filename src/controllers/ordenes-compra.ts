import { Request, Response } from "express";
const db = require("../db_connection");

export const agregarOrdenCompra = async (req: Request & any, res: Response) => {
    const body = req.body;
    const result: Promise<any> = db.query(`
        call sp_crearOrden(${body.proveedor_id}, ${body.producto_id}, ${body.cantidad}, ${body.precio_compra})
    `);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al crear OrdenCompra", error: err });
    });
    console.log("result: ", result.then);
};

export const obtenerOrdenCompra = (req: Request & any, res: Response) => {
    const id = req.params;
    const query = "";
    const result: Promise<any> = db.query(`call sp_`);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener OrdenCompra", error: err });
    });
};

export const obtenerOrdenesCompra = (req: Request & any, res: Response) => {
    const query = "call sp_obtenerOrdenes";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP[0]);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener OrdenCompra", error: err });
    });
};

export const cambiarEstadoOrdenCompra = (req: Request & any, res: Response) => {
    const id = req.params.id;
    console.log("change status id: ", id);
    const result: Promise<any> = db.query(`call sp_cambiarEstadoCompra(${id})`);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar OrdenCompra", error: err });
    });
    console.log("result: ", result);
};
