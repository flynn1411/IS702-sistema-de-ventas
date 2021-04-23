"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipos_1 = require("./../controllers/tipos");
const TiposRouter = express_1.Router();
TiposRouter.get("/list", tipos_1.obtenerTipos);
exports.default = TiposRouter;
//# sourceMappingURL=tipos.js.map