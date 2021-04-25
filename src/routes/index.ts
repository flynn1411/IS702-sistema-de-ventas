import { Router } from "express";
import AuthRouter from "./auth";
import DireccionRouter from "./direccion";
import FabricantesRouter from "./fabricantes";
import FacturaRouter from "./facturas";
import FacturaProductoRouter from "./facturas-producto";
import InventarioRouter from "./inventario";
import OrdenCompraRouter from "./ordenes-compra";
import PagoRouter from "./pagos";
import PaqueteRouter from "./paquetes";
import PaqueteProductoRouter from "./paquetes-producto";
import ProductoRouter from "./productos";
import TiposRouter from "./tipos";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/test", (req, res) => {
    res.end("TESTING SUCCESS");
});

router.use("/productos", ProductoRouter);
router.use("/tipos", TiposRouter);
router.use("/fabricantes", FabricantesRouter);
router.use("/ordenes-compra", OrdenCompraRouter);
router.use("/inventario", InventarioRouter);
router.use("/direccion", DireccionRouter);
router.use("/paquetes", PaqueteRouter);
router.use("/paquetes-producto", PaqueteProductoRouter);
router.use("/pagos", PagoRouter);
router.use("/facturas", FacturaRouter);
router.use("/factura-producto", FacturaProductoRouter);

export default router;
