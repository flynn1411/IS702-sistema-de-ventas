"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../db_connection");
exports.obtenerDirecciones = (req, res) => {
    const query = "SELECT id, calle FROM Direcciones";
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener Direcciones", error: err });
    });
};
//# sourceMappingURL=direccion.js.map