"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPago = exports.obtenerPago = exports.editarPago = exports.agregarPago = void 0;
const db = require("../db_connection");
const agregarPago = (req, res) => {
    const product = req.body;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear Pago", error: err });
    });
    console.log("result: ", result.then);
};
exports.agregarPago = agregarPago;
const editarPago = (req, res) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al editar Pago", error: err });
    });
};
exports.editarPago = editarPago;
const obtenerPago = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener Pago", error: err });
    });
};
exports.obtenerPago = obtenerPago;
const eliminarPago = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar Pago", error: err });
    });
    console.log("result: ", result);
};
exports.eliminarPago = eliminarPago;
//# sourceMappingURL=pagos.js.map