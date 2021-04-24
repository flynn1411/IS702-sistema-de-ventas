import { Router } from "express";
import {
    agregarOrdenCompra,
    editarOrdenCompra,
    eliminarOrdenCompra,
    obtenerOrdenCompra
} from "./../controllers/ordenes-compra";

const OrdenCompraRouter = Router();

OrdenCompraRouter.post("/agregar-factura-producto", agregarOrdenCompra);
OrdenCompraRouter.put("/update/:id", editarOrdenCompra);
OrdenCompraRouter.get("/get/:id", obtenerOrdenCompra);
OrdenCompraRouter.delete("/delete/:id", eliminarOrdenCompra);

export default OrdenCompraRouter;
