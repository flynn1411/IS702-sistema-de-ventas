"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarInventario = exports.obtenerInventario = exports.editarInventario = exports.agregarInventario = void 0;
const db = require("../db_connection");
const agregarInventario = (req, res) => {
    const product = req.body;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear Inventario", error: err });
    });
    console.log("result: ", result.then);
};
exports.agregarInventario = agregarInventario;
const editarInventario = (req, res) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al editar Inventario", error: err });
    });
};
exports.editarInventario = editarInventario;
const obtenerInventario = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener Inventario", error: err });
    });
};
exports.obtenerInventario = obtenerInventario;
const eliminarInventario = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar Inventario", error: err });
    });
    console.log("result: ", result);
};
exports.eliminarInventario = eliminarInventario;
//# sourceMappingURL=inventario.js.map