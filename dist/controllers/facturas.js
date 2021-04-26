"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../db_connection");
exports.agregarFactura = (req, res) => {
    const body = req.body;
    const products = body.productos;
    const result = db.query(`
        call sp_crearFactura('${body.correo}', '${body.metodo}')
    `);
    result.then((resultP) => {
        const result2 = db.query("SELECT id FROM Facturas ORDER BY id DESC LIMIT 1");
        result2.then((resultId) => {
            const lastId = resultId[0].id;
            console.log("last", lastId);
            res.status(200).json({ factura_id: lastId });
        });
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear factura", error: err });
    });
};
exports.vincularProducto = (req, res) => {
    const body = req.body;
    console.log("vincular body: ", body);
    const result = db.query(`
        call sp_vincularFactura(${body.factura_id}, ${body.producto_id}, ${body.cantidad})
    `);
    result.then((resultP) => {
        res.status(200).json(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al vincular producto", error: err });
    });
};
exports.obtenerFacturas = (req, res) => {
    const query = "call sp_obtenerFacturas";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP[0]);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener factura", error: err });
    });
};
exports.pagarFactura = (req, res) => {
    const body = req.body;
    const result = db.query(`
        UPDATE
            Facturas
        SET
            estado_pago = 1, envio_id = 1
        WHERE
            id = ${body.factura_id}
        ;
    `);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al pagar factura", error: err });
    });
    console.log("result: ", result);
};
//# sourceMappingURL=facturas.js.map