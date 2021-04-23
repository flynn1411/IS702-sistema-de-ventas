"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../database");
exports.agregarOrdenCompra = (req, res) => {
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
exports.editarOrdenCompra = (req, res) => {
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
exports.obtenerOrdenCompra = (req, res) => {
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
exports.eliminarOrdenCompra = (req, res) => {
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
//# sourceMappingURL=ordenes-compra.js.map