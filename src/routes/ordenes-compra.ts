import { Router } from "express";
import {
    agregarOrdenCompra,
    cambiarEstadoOrdenCompra,
    obtenerOrdenesCompra,
} from "./../controllers/ordenes-compra";

const OrdenCompraRouter = Router();

OrdenCompraRouter.post("/create", agregarOrdenCompra);
OrdenCompraRouter.get("/list", obtenerOrdenesCompra);
OrdenCompraRouter.put("/change-status", cambiarEstadoOrdenCompra);

export default OrdenCompraRouter;
