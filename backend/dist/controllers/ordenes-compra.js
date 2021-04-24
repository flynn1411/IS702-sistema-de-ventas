"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarOrdenCompra = exports.obtenerOrdenCompra = exports.editarOrdenCompra = exports.agregarOrdenCompra = void 0;
const db = require("../db_connection");
const agregarOrdenCompra = (req, res) => {
    const product = req.body;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear OrdenCompra", error: err });
    });
    console.log("result: ", result.then);
};
exports.agregarOrdenCompra = agregarOrdenCompra;
const editarOrdenCompra = (req, res) => {
    const product = req.body;
    const id = Number(req.params);
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al editar OrdenCompra", error: err });
    });
};
exports.editarOrdenCompra = editarOrdenCompra;
const obtenerOrdenCompra = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener OrdenCompra", error: err });
    });
};
exports.obtenerOrdenCompra = obtenerOrdenCompra;
const eliminarOrdenCompra = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(query);
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar OrdenCompra", error: err });
    });
    console.log("result: ", result);
};
exports.eliminarOrdenCompra = eliminarOrdenCompra;
//# sourceMappingURL=ordenes-compra.js.map