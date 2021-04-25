"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const direccion_1 = require("./../controllers/direccion");
const DireccionRouter = express_1.Router();
DireccionRouter.get("/list", direccion_1.obtenerDirecciones);
exports.default = DireccionRouter;
//# sourceMappingURL=direccion.js.map