"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagos_1 = require("./../controllers/pagos");
const PagoRouter = express_1.Router();
PagoRouter.post("/agregar-factura-producto", pagos_1.agregarPago);
PagoRouter.put("/update/:id", pagos_1.editarPago);
PagoRouter.get("/get/:id", pagos_1.obtenerPago);
PagoRouter.delete("/delete/:id", pagos_1.eliminarPago);
exports.default = PagoRouter;
//# sourceMappingURL=pagos.js.map