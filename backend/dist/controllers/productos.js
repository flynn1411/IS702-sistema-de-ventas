"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerProductos = exports.agregarProducto = void 0;
const db = require("../db_connection");
const agregarProducto = (req, res) => {
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
exports.agregarProducto = agregarProducto;
const obtenerProductos = (req, res) => {
    console.log("obtener productos");
    const query = "call sp_obtenerProductoInventario";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
    console.log("result: ", result);
};
exports.obtenerProductos = obtenerProductos;
//# sourceMappingURL=productos.js.map