import { Router } from "express";
import {
    obtenerProducto,
    obtenerProductos,
    obtenerProductosPorCategoria,
    obtenerProductosPorFabricante,
} from "./../controllers/productos";

const ProductoRouter = Router();
ProductoRouter.get("/list", obtenerProductos);
ProductoRouter.get("/list-per-category", obtenerProductosPorCategoria);
ProductoRouter.get("/list-per-manufacturer", obtenerProductosPorFabricante);
ProductoRouter.get("/product", obtenerProducto);
export default ProductoRouter;
