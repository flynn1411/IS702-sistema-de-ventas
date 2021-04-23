"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenes_compra_1 = require("./../controllers/ordenes-compra");
const OrdenCompraRouter = express_1.Router();
OrdenCompraRouter.post("/agregar-factura-producto", ordenes_compra_1.agregarOrdenCompra);
OrdenCompraRouter.put("/update/:id", ordenes_compra_1.editarOrdenCompra);
OrdenCompraRouter.get("/get/:id", ordenes_compra_1.obtenerOrdenCompra);
OrdenCompraRouter.delete("/delete/:id", ordenes_compra_1.eliminarOrdenCompra);
exports.default = OrdenCompraRouter;
//# sourceMappingURL=ordenes-compra.js.map