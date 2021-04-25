import { Router } from "express";
import {
    agregarOrdenCompra,
    cambiarEstadoOrdenCompra,
    obtenerOrdenCompra,
    obtenerOrdenesCompra,
} from "./../controllers/ordenes-compra";

const OrdenCompraRouter = Router();

OrdenCompraRouter.post("/create", agregarOrdenCompra);
OrdenCompraRouter.put("/change-status", cambiarEstadoOrdenCompra);
OrdenCompraRouter.get("/orden-compra/:id", obtenerOrdenCompra);
OrdenCompraRouter.get("/list", obtenerOrdenesCompra);

export default OrdenCompraRouter;
