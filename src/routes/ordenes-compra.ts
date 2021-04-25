import { Router } from "express";
import {
    agregarOrdenCompra,
    cambiarEstadoOrdenCompra,
    obtenerOrdenCompra,
    obtenerOrdenesCompra,
} from "./../controllers/ordenes-compra";

const OrdenCompraRouter = Router();

OrdenCompraRouter.post("/create", agregarOrdenCompra);
OrdenCompraRouter.get("/orden-compra/:id", obtenerOrdenCompra);
OrdenCompraRouter.get("/list", obtenerOrdenesCompra);
OrdenCompraRouter.post("/change-status/:id", cambiarEstadoOrdenCompra);

export default OrdenCompraRouter;
