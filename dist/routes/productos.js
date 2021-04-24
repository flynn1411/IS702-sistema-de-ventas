"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("./../controllers/productos");
const ProductoRouter = express_1.Router();
ProductoRouter.get("/list", productos_1.obtenerProductos);
exports.default = ProductoRouter;
//# sourceMappingURL=productos.js.map