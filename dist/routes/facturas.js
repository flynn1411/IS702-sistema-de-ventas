"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturas_1 = require("./../controllers/facturas");
const FacturaRouter = express_1.Router();
FacturaRouter.post("/create", facturas_1.agregarFactura);
FacturaRouter.get("/list", facturas_1.obtenerFacturas);
FacturaRouter.put("/pagar-factura", facturas_1.pagarFactura);
FacturaRouter.put("/vincular-producto", facturas_1.vincularProducto);
exports.default = FacturaRouter;
//# sourceMappingURL=facturas.js.map