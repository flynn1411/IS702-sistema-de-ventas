import { Router } from "express";
import {
    agregarPago,
    editarPago,
    eliminarPago,
    obtenerPago
} from "./../controllers/pagos";

const PagoRouter = Router();

PagoRouter.post("/agregar-factura-producto", agregarPago);
PagoRouter.put("/update/:id", editarPago);
PagoRouter.get("/get/:id", obtenerPago);
PagoRouter.delete("/delete/:id", eliminarPago);

export default PagoRouter;
