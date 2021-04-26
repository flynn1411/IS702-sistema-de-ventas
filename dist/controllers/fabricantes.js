"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../db_connection");
exports.obtenerFabricantes = (req, res) => {
    console.log("obteniendo fabricantes: ");
    const query = "call sp_obtenerFabricante";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP[0]);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener Fabricantes", error: err });
    });
};
//# sourceMappingURL=fabricantes.js.map