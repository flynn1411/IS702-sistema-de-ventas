import { Router } from "express";
import {
    agregarFacturaProducto,
    editarFacturaProducto,
    eliminarFacturaProducto,
    obtenerFacturaProducto
} from "./../controllers/facturas-producto";

const FacturaProductoRouter = Router();

FacturaProductoRouter.post("/agregar-factura-producto", agregarFacturaProducto);
FacturaProductoRouter.put("/update/:id", editarFacturaProducto);
FacturaProductoRouter.get("/get/:id", obtenerFacturaProducto);
FacturaProductoRouter.delete("/delete/:id", eliminarFacturaProducto);

export default FacturaProductoRouter;
