import { Request, Response } from "express";
const db = require("../db_connection");

export const agregarFactura = (req: Request & any, res: Response) => {
    const body = req.body;
    const products: any[] = body.productos;
    const result: Promise<any> = db.query(`
        call sp_crearFactura('${body.correo}', '${body.metodo}')
    `);
    result.then((resultP: any) => {
        const result2 = db.query("SELECT id FROM Facturas ORDER BY id DESC LIMIT 1");
        result2.then((resultId: any) => {
            const lastId = resultId[0].id;
            console.log("last", lastId);
            res.status(200).json({ factura_id: lastId });
        });
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al crear factura", error: err });
    });
};

export const vincularProducto = (req: Request & any, res: Response) => {
    const body = req.body;
    console.log("vincular body: ", body);
    const result: Promise<any> = db.query(`
        call sp_vincularFactura(${body.factura_id}, ${body.producto_id}, ${body.cantidad})
    `);
    result.then((resultP: any) => {
        res.status(200).json(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al vincular producto", error: err });
    });
};

export const obtenerFacturas = (req: Request & any, res: Response) => {
    const query = "call sp_obtenerFacturas";
    const result: Promise<any> = db.query(query);
    result.then((resultP: any) => {
        res.status(200).send(resultP[0]);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener factura", error: err });
    });
};

export const pagarFactura = (req: Request & any, res: Response) => {
    const body = req.body;
    const result: Promise<any> = db.query(`
        UPDATE
            Facturas
        SET
            estado_pago = 1, envio_id = 1
        WHERE
            id = ${body.factura_id}
        ;
    `);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al pagar factura", error: err });
    });
    console.log("result: ", result);
};
