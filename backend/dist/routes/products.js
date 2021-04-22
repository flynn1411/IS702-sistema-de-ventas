"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("./../controllers/product");
const ProductRouter = express_1.Router();
ProductRouter.post("/create-product", product_1.createProduct);
ProductRouter.delete("/remove-product/:id", product_1.deleteProduct);
ProductRouter.get("/get-product/:id", product_1.getProduct);
ProductRouter.get("/get-list/:id", product_1.getProducts);
ProductRouter.put("/update-product", product_1.updateProduct);
exports.default = ProductRouter;
//# sourceMappingURL=products.js.map