import { Router } from "express";
import {
    agregarInventario,
    editarInventario,
    eliminarInventario,
    obtenerInventario
} from "./../controllers/inventario";

const InventarioRouter = Router();

InventarioRouter.post("/agregar-factura-producto", agregarInventario);
InventarioRouter.put("/update/:id", editarInventario);
InventarioRouter.get("/get/:id", obtenerInventario);
InventarioRouter.delete("/delete/:id", eliminarInventario);

export default InventarioRouter;
