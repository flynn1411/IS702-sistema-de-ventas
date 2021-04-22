import { Router } from "express";
import AuthRouter from "./auth";
import ProductRouter from "./product";

const router = Router();
const db = require("../database");

router.use("/auth", AuthRouter);
router.use("/product", ProductRouter);

export default router;
