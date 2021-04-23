"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paquetes_1 = require("./../controllers/paquetes");
const PaqueteRouter = express_1.Router();
PaqueteRouter.post("/agregar-factura-producto", paquetes_1.agregarPaquete);
PaqueteRouter.put("/update/:id", paquetes_1.editarPaquete);
PaqueteRouter.get("/get/:id", paquetes_1.obtenerPaquete);
PaqueteRouter.delete("/delete/:id", paquetes_1.eliminarPaquete);
exports.default = PaqueteRouter;
//# sourceMappingURL=paquetes.js.map