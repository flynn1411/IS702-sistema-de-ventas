"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fabricantes_1 = require("./../controllers/fabricantes");
const FabricantesRouter = express_1.Router();
FabricantesRouter.get("/list", fabricantes_1.obtenerFabricantes);
exports.default = FabricantesRouter;
//# sourceMappingURL=fabricantes.js.map