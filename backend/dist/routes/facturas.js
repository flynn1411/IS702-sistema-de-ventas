"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facturas_1 = require("./../controllers/facturas");
const FacturaRouter = express_1.Router();
FacturaRouter.post("/agregar-factura-producto", facturas_1.agregarFactura);
FacturaRouter.put("/update/:id", facturas_1.editarFactura);
FacturaRouter.get("/get/:id", facturas_1.obtenerFactura);
FacturaRouter.delete("/delete/:id", facturas_1.eliminarFactura);
exports.default = FacturaRouter;
//# sourceMappingURL=facturas.js.map