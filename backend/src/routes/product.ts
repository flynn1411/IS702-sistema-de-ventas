import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product";

const ProductRouter = Router();

ProductRouter.post("/create", createProduct);
ProductRouter.put("/update/:id", updateProduct);
ProductRouter.delete("/remove/:id", deleteProduct);
ProductRouter.get("/get/:id", getProduct);
ProductRouter.get("/get-list/:id", getProducts);

export default ProductRouter;
