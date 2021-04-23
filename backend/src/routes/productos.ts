import { Router } from "express";
import {
    agregarProducto,
    editarProducto,
    eliminarProducto,
    obtenerProducto
} from "./../controllers/productos";

const ProductoRouter = Router();

ProductoRouter.post("/agregar-factura-producto", agregarProducto);
ProductoRouter.put("/update/:id", editarProducto);
ProductoRouter.get("/get/:id", obtenerProducto);
ProductoRouter.delete("/delete/:id", eliminarProducto);

export default ProductoRouter;
