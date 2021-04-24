"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../db_connection");
exports.agregarPaqueteProducto = (req, res) => {
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
exports.editarPaqueteProducto = (req, res) => {
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
exports.obtenerPaqueteProducto = (req, res) => {
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
exports.eliminarPaqueteProducto = (req, res) => {
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
//# sourceMappingURL=paquetes-producto.js.map