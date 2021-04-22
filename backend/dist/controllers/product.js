"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../database");
exports.createProduct = (req, res) => {
    const product = req.body;
    console.log("create product: ", product);
    const result = db.query("INSERT INTO Productos SET ? ", product);
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al agregar producto: ", err);
        res.status(500).json({ message: "Error al crear productor", error: err });
    });
    console.log("result: ", result.then);
};
exports.updateProduct = (req, res) => {
    const product = req.body;
    const id = Number(req.params);
    const result = db.query("UPDATE Productos SET name = 'samsun' WHERE id = 2");
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al actualizar producto: ", err);
        res.status(500).json({ message: "Error al actualizar productor", error: err });
    });
};
exports.getProduct = (req, res) => {
    const id = req.params;
    const result = db.query("SELECT * FROM Productos WHERE id = ? ", id);
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al obtener productos: ", err);
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
};
exports.getProducts = (req, res) => {
    const result = db.query("SELECT * FROM Productos");
    result.then((resultP) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al obtener productos: ", err);
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
    console.log("result: ", result);
};
exports.deleteProduct = (req, res) => {
    const id = req.params;
    const result = db.query("DELETE FROM Productos WHERE id = ? ", id);
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
//# sourceMappingURL=product.js.map