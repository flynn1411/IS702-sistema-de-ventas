import { Router } from "express";
import {
    obtenerTipos
} from "./../controllers/tipos";

const TiposRouter = Router();

TiposRouter.get("/list", obtenerTipos);

export default TiposRouter;
