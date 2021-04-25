import { Router } from "express";
import {
    obtenerDirecciones
} from "./../controllers/direccion";

const FabricantesRouter = Router();

FabricantesRouter.get("/list", obtenerDirecciones);

export default FabricantesRouter;
