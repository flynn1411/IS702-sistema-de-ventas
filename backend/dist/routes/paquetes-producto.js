"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paquetes_producto_1 = require("./../controllers/paquetes-producto");
const PaqueteProductoRouter = express_1.Router();
PaqueteProductoRouter.post("/agregar-factura-producto", paquetes_producto_1.agregarPaqueteProducto);
PaqueteProductoRouter.put("/update/:id", paquetes_producto_1.editarPaqueteProducto);
PaqueteProductoRouter.get("/get/:id", paquetes_producto_1.obtenerPaqueteProducto);
PaqueteProductoRouter.delete("/delete/:id", paquetes_producto_1.eliminarPaqueteProducto);
exports.default = PaqueteProductoRouter;
//# sourceMappingURL=paquetes-producto.js.map