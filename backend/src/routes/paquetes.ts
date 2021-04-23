import { Router } from "express";
import {
    agregarPaquete,
    editarPaquete,
    eliminarPaquete,
    obtenerPaquete
} from "./../controllers/paquetes";

const PaqueteRouter = Router();

PaqueteRouter.post("/agregar-factura-producto", agregarPaquete);
PaqueteRouter.put("/update/:id", editarPaquete);
PaqueteRouter.get("/get/:id", obtenerPaquete);
PaqueteRouter.delete("/delete/:id", eliminarPaquete);

export default PaqueteRouter;
