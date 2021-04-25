"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenes_compra_1 = require("./../controllers/ordenes-compra");
const OrdenCompraRouter = express_1.Router();
OrdenCompraRouter.post("/create", ordenes_compra_1.agregarOrdenCompra);
OrdenCompraRouter.put("/change-status", ordenes_compra_1.cambiarEstadoOrdenCompra);
OrdenCompraRouter.get("/orden-compra/:id", ordenes_compra_1.obtenerOrdenCompra);
OrdenCompraRouter.get("/list", ordenes_compra_1.obtenerOrdenesCompra);
exports.default = OrdenCompraRouter;
//# sourceMappingURL=ordenes-compra.js.map