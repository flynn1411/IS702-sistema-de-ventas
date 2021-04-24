import { Router } from "express";
import {
    obtenerProductos
} from "./../controllers/productos";

const ProductoRouter = Router();
ProductoRouter.get("/list", obtenerProductos);
export default ProductoRouter;
