"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturas_producto_1 = require("./../controllers/facturas-producto");
const FacturaProductoRouter = express_1.Router();
FacturaProductoRouter.post("/agregar-factura-producto", facturas_producto_1.agregarFacturaProducto);
FacturaProductoRouter.put("/update/:id", facturas_producto_1.editarFacturaProducto);
FacturaProductoRouter.get("/get/:id", facturas_producto_1.obtenerFacturaProducto);
FacturaProductoRouter.delete("/delete/:id", facturas_producto_1.eliminarFacturaProducto);
exports.default = FacturaProductoRouter;
//# sourceMappingURL=facturas-producto.js.map