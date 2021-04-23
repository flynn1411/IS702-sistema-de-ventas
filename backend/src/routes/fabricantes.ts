import { Router } from "express";
import {
    obtenerFabricantes
} from "./../controllers/fabricantes";

const FabricantesRouter = Router();

FabricantesRouter.get("/list", obtenerFabricantes);

export default FabricantesRouter;
