"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTipos = void 0;
const db = require("../db_connection");
const obtenerTipos = (req, res) => {
    console.log("obteniendo Tipos: ");
    const query = "call sp_obtenerTipo";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener Tipo", error: err });
    });
};
exports.obtenerTipos = obtenerTipos;
//# sourceMappingURL=tipos.js.map