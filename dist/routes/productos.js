"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("./../controllers/productos");
const ProductoRouter = express_1.Router();
ProductoRouter.get("/list", productos_1.obtenerProductos);
ProductoRouter.get("/list-per-category/:id", productos_1.obtenerProductosPorCategoria);
ProductoRouter.get("/list-per-manufacturer/:id", productos_1.obtenerProductosPorFabricante);
ProductoRouter.get("/product/:id", productos_1.obtenerProducto);
exports.default = ProductoRouter;
//# sourceMappingURL=productos.js.map