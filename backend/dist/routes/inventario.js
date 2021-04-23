"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventario_1 = require("./../controllers/inventario");
const InventarioRouter = express_1.Router();
InventarioRouter.post("/agregar-factura-producto", inventario_1.agregarInventario);
InventarioRouter.put("/update/:id", inventario_1.editarInventario);
InventarioRouter.get("/get/:id", inventario_1.obtenerInventario);
InventarioRouter.delete("/delete/:id", inventario_1.eliminarInventario);
exports.default = InventarioRouter;
//# sourceMappingURL=inventario.js.map