"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const direccion_1 = __importDefault(require("./direccion"));
const fabricantes_1 = __importDefault(require("./fabricantes"));
const facturas_1 = __importDefault(require("./facturas"));
const facturas_producto_1 = __importDefault(require("./facturas-producto"));
const inventario_1 = __importDefault(require("./inventario"));
const ordenes_compra_1 = __importDefault(require("./ordenes-compra"));
const pagos_1 = __importDefault(require("./pagos"));
const paquetes_1 = __importDefault(require("./paquetes"));
const paquetes_producto_1 = __importDefault(require("./paquetes-producto"));
const productos_1 = __importDefault(require("./productos"));
const tipos_1 = __importDefault(require("./tipos"));
const router = express_1.Router();
router.use("/auth", auth_1.default);
router.use("/test", (req, res) => {
    res.end("TESTING SUCCESS");
});
router.use("/productos", productos_1.default);
router.use("/tipos", tipos_1.default);
router.use("/fabricantes", fabricantes_1.default);
router.use("/ordenes-compra", ordenes_compra_1.default);
router.use("/inventario", inventario_1.default);
router.use("/direccion", direccion_1.default);
router.use("/paquetes", paquetes_1.default);
router.use("/paquetes-producto", paquetes_producto_1.default);
router.use("/pagos", pagos_1.default);
router.use("/facturas", facturas_1.default);
router.use("/factura-producto", facturas_producto_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map