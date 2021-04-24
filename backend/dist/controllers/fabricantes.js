"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerFabricantes = void 0;
const db = require("../db_connection");
const obtenerFabricantes = (req, res) => {
    console.log("obteniendo fabricantes: ");
    const query = "call sp_obtenerFabricante";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener Fabricantes", error: err });
    });
};
exports.obtenerFabricantes = obtenerFabricantes;
//# sourceMappingURL=fabricantes.js.map