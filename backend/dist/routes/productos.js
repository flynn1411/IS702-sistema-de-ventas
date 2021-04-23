"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("./../controllers/productos");
const ProductoRouter = express_1.Router();
ProductoRouter.post("/agregar-factura-producto", productos_1.agregarProducto);
ProductoRouter.put("/update/:id", productos_1.editarProducto);
ProductoRouter.get("/get/:id", productos_1.obtenerProducto);
ProductoRouter.delete("/delete/:id", productos_1.eliminarProducto);
exports.default = ProductoRouter;
//# sourceMappingURL=productos.js.map