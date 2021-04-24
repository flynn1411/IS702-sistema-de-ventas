"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPaqueteProducto = exports.obtenerPaqueteProducto = exports.editarPaqueteProducto = exports.agregarPaqueteProducto = void 0;
const db = require("../db_connection");
const agregarPaqueteProducto = (req, res) => {
    const product = req.body;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear paquete de producto", error: err });
    });
    console.log("result: ", result.then);
};
exports.agregarPaqueteProducto = agregarPaqueteProducto;
const editarPaqueteProducto = (req, res) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al editar paquete de producto", error: err });
    });
};
exports.editarPaqueteProducto = editarPaqueteProducto;
const obtenerPaqueteProducto = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener paquete de producto", error: err });
    });
};
exports.obtenerPaqueteProducto = obtenerPaqueteProducto;
const eliminarPaqueteProducto = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar productor", error: err });
    });
    console.log("result: ", result);
};
exports.eliminarPaqueteProducto = eliminarPaqueteProducto;
//# sourceMappingURL=paquetes-producto.js.map