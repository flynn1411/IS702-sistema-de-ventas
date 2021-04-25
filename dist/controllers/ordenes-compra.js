"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../db_connection");
exports.agregarOrdenCompra = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const body = req.body;
    const result = db.query(`
        call sp_crearOrden(${body.proveedor_id}, ${body.producto_id}, ${body.cantidad}, ${body.precio_compra})
    `);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear OrdenCompra", error: err });
    });
    console.log("result: ", result.then);
});
exports.obtenerOrdenCompra = (req, res) => {
    const id = req.params;
    const query = "";
    const result = db.query(`call sp_`);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener OrdenCompra", error: err });
    });
};
exports.obtenerOrdenesCompra = (req, res) => {
    const query = "call sp_obtenerOrdenes";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP[0]);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener OrdenCompra", error: err });
    });
};
exports.cambiarEstadoOrdenCompra = (req, res) => {
    const id = req.params.id;
    console.log("change status id: ", id);
    const result = db.query(`call sp_cambiarEstadoCompra(${id})`);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar OrdenCompra", error: err });
    });
    console.log("result: ", result);
};
//# sourceMappingURL=ordenes-compra.js.map