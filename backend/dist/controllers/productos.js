"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../database");
exports.agregarProducto = (req, res) => {
    const product = req.body;
    const query = "";
    const result = db.query(query, product);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear producto", error: err });
    });
};
exports.editarProducto = (req, res) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al actualizar productor", error: err });
    });
};
exports.obtenerProducto = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
};
exports.obtenerProductos = (req, res) => {
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
    console.log("result: ", result);
};
exports.eliminarProducto = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al eliminar productor", error: err });
    });
};
//# sourceMappingURL=productos.js.map