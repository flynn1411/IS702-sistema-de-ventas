import { Router } from "express";
import {
    agregarFactura,
    obtenerFacturas,
    pagarFactura,
    vincularProducto,
} from "./../controllers/facturas";

const FacturaRouter = Router();

FacturaRouter.post("/create", agregarFactura);
FacturaRouter.get("/list", obtenerFacturas);
FacturaRouter.put("/pagar-factura", pagarFactura);
FacturaRouter.put("/vincular-producto", vincularProducto);

export default FacturaRouter;
