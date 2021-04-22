"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const ProductRouter = express_1.Router();
ProductRouter.post("/create", product_1.createProduct);
ProductRouter.put("/update/:id", product_1.updateProduct);
ProductRouter.delete("/remove/:id", product_1.deleteProduct);
ProductRouter.get("/get/:id", product_1.getProduct);
ProductRouter.get("/get-list/:id", product_1.getProducts);
exports.default = ProductRouter;
//# sourceMappingURL=product.js.map