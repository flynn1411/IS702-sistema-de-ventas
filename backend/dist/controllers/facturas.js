"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarFactura = exports.obtenerFactura = exports.editarFactura = exports.agregarFactura = void 0;
const db = require("../db_connection");
const agregarFactura = (req, res) => {
    const product = req.body;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear factura", error: err });
    });
    console.log("result: ", result.then);
};
exports.agregarFactura = agregarFactura;
const editarFactura = (req, res) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al editar factura", error: err });
    });
};
exports.editarFactura = editarFactura;
const obtenerFactura = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener factura", error: err });
    });
};
exports.obtenerFactura = obtenerFactura;
const eliminarFactura = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar factura", error: err });
    });
    console.log("result: ", result);
};
exports.eliminarFactura = eliminarFactura;
//# sourceMappingURL=facturas.js.map