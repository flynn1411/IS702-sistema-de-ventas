import { Router } from "express";
import {
    agregarFactura,
    editarFactura,
    eliminarFactura,
    obtenerFactura
} from "./../controllers/facturas";

const FacturaRouter = Router();

FacturaRouter.post("/agregar-factura-producto", agregarFactura);
FacturaRouter.put("/update/:id", editarFactura);
FacturaRouter.get("/get/:id", obtenerFactura);
FacturaRouter.delete("/delete/:id", eliminarFactura);

export default FacturaRouter;
