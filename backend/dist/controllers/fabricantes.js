"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../database");
exports.obtenerFabricantes = (req, res) => {
    console.log("obteniendo fabricantes: ");
    const query = "call sp_obtenerFabricante";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener Tipo", error: err });
    });
};
//# sourceMappingURL=fabricantes.js.map