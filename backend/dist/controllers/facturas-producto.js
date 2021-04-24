"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarFacturaProducto = exports.obtenerFacturaProducto = exports.editarFacturaProducto = exports.agregarFacturaProducto = void 0;
const db = require("../db_connection");
const agregarFacturaProducto = (req, res) => {
    const product = req.body;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear facturaProducto", error: err });
    });
    console.log("result: ", result.then);
};
exports.agregarFacturaProducto = agregarFacturaProducto;
const editarFacturaProducto = (req, res) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al editar facturaProducto", error: err });
    });
};
exports.editarFacturaProducto = editarFacturaProducto;
const obtenerFacturaProducto = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener facturaProducto", error: err });
    });
};
exports.obtenerFacturaProducto = obtenerFacturaProducto;
const eliminarFacturaProducto = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar facturaProducto", error: err });
    });
    console.log("result: ", result);
};
exports.eliminarFacturaProducto = eliminarFacturaProducto;
//# sourceMappingURL=facturas-producto.js.map