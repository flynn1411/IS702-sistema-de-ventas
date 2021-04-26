"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenes_compra_1 = require("./../controllers/ordenes-compra");
const OrdenCompraRouter = express_1.Router();
OrdenCompraRouter.post("/create", ordenes_compra_1.agregarOrdenCompra);
OrdenCompraRouter.get("/list", ordenes_compra_1.obtenerOrdenesCompra);
OrdenCompraRouter.put("/change-status", ordenes_compra_1.cambiarEstadoOrdenCompra);
exports.default = OrdenCompraRouter;
//# sourceMappingURL=ordenes-compra.js.map