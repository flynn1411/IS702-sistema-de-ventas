import { Router } from "express";
import {
    agregarPaqueteProducto,
    editarPaqueteProducto,
    eliminarPaqueteProducto,
    obtenerPaqueteProducto
} from "./../controllers/paquetes-producto";

const PaqueteProductoRouter = Router();

PaqueteProductoRouter.post("/agregar-factura-producto", agregarPaqueteProducto);
PaqueteProductoRouter.put("/update/:id", editarPaqueteProducto);
PaqueteProductoRouter.get("/get/:id", obtenerPaqueteProducto);
PaqueteProductoRouter.delete("/delete/:id", eliminarPaqueteProducto);

export default PaqueteProductoRouter;
