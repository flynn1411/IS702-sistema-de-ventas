import { Router } from "express";
import {
    obtenerDirecciones
} from "./../controllers/direccion";

const DireccionRouter = Router();

DireccionRouter.get("/list", obtenerDirecciones);

export default DireccionRouter;
