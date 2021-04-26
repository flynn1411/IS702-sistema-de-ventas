import { Router } from "express";
import {
    obtenerProducto,
    obtenerProductos,
    obtenerProductosPorCategoria,
    obtenerProductosPorFabricante,
} from "./../controllers/productos";

const ProductoRouter = Router();
ProductoRouter.get("/list", obtenerProductos);
ProductoRouter.get("/list-per-category/:id", obtenerProductosPorCategoria);
ProductoRouter.get("/list-per-manufacturer/:id", obtenerProductosPorFabricante);
ProductoRouter.get("/product/:id", obtenerProducto);
export default ProductoRouter;
