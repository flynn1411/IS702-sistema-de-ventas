"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPaquete = exports.obtenerPaquete = exports.editarPaquete = exports.agregarPaquete = void 0;
const db = require("../db_connection");
const agregarPaquete = (req, res) => {
    const product = req.body;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear Paquete", error: err });
    });
    console.log("result: ", result.then);
};
exports.agregarPaquete = agregarPaquete;
const editarPaquete = (req, res) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al editar Paquete", error: err });
    });
};
exports.editarPaquete = editarPaquete;
const obtenerPaquete = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener Paquete", error: err });
    });
};
exports.obtenerPaquete = obtenerPaquete;
const eliminarPaquete = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar Paquete", error: err });
    });
    console.log("result: ", result);
};
exports.eliminarPaquete = eliminarPaquete;
//# sourceMappingURL=paquetes.js.map