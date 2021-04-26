"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../db_connection");
exports.agregarProducto = (req, res) => {
    const product = req.body;
    const query = "";
    const result = db.query(query, product);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al crear producto", error: err });
    });
};
exports.obtenerProductos = (req, res) => {
    console.log("obtener productos");
    const query = `
        SELECT
            Productos.id as "id",
            Productos.modelo as "nombre",
            Productos.tipo_id,
            Tipos.nombre as "categoria",
            Fabricantes.nombre as "fabricante",
            Productos.fabricante_id,
            Inventario.existencia as "existencia",
            Inventario.subtotal as "precio"
        FROM
            Inventario
        INNER JOIN
            Productos
        ON
            Inventario.producto_id = Productos.id
        INNER JOIN
            Tipos
        ON
            Tipos.id = Productos.tipo_id
        INNER JOIN
            Fabricantes
        ON Fabricantes.id = Productos.fabricante_id
        ;`;
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
};
exports.obtenerProductosPorCategoria = (req, res) => {
    console.log("obtener productos por categoria");
    const id = Number(req.params.id);
    const query = `
        SELECT
            Productos.id as "id",
            Productos.modelo as "nombre",
            Productos.tipo_id,
            Tipos.nombre as "categoria",
            Fabricantes.nombre as "fabricante",
            Productos.fabricante_id,
            Inventario.existencia as "existencia",
            Inventario.subtotal as "precio"
        FROM
            Inventario
            INNER JOIN
                Productos
            ON
                Inventario.producto_id = Productos.id
            INNER JOIN
                Tipos
            ON
                Tipos.id = Productos.tipo_id
            INNER JOIN
                Fabricantes
            ON
                Fabricantes.id = Productos.fabricante_id
        WHERE Productos.tipo_id = ${id}
    ;`;
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener productos por categoria", error: err });
    });
};
exports.obtenerProductosPorFabricante = (req, res) => {
    console.log("obtener productos por fabricante");
    const id = Number(req.params.id);
    const query = `
        SELECT
            Productos.id as "id",
            Productos.modelo as "nombre",
            Productos.tipo_id,
            Tipos.nombre as "categoria",
            Fabricantes.nombre as "fabricante",
            Productos.fabricante_id,
            Inventario.existencia as "existencia",
            Inventario.subtotal as "precio"
        FROM
            Inventario
        INNER JOIN
            Productos
        ON
            Inventario.producto_id = Productos.id
        INNER JOIN
            Tipos
        ON
            Tipos.id = Productos.tipo_id
        INNER JOIN
            Fabricantes
        ON
            Fabricantes.id = Productos.fabricante_id
        WHERE Productos.fabricante_id = ${id}
    ;`;
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener productos por fabricante", error: err });
    });
};
exports.obtenerProducto = (req, res) => {
    console.log("obtener producto");
    const id = Number(req.params.id);
    const query = `
        SELECT
            Productos.id as "id",
            Productos.modelo as "nombre",
            Productos.tipo_id,
            Tipos.nombre as "categoria",
            Fabricantes.nombre as "fabricante",
            Productos.fabricante_id,
            Inventario.existencia as "existencia",
            Inventario.subtotal as "precio",
            Productos.descripcion
        FROM
            Inventario
        INNER JOIN
            Productos
        ON
            Inventario.producto_id = Productos.id
        INNER JOIN
            Tipos
        ON
            Tipos.id = Productos.tipo_id
        INNER JOIN
            Fabricantes
        ON
            Fabricantes.id = Productos.fabricante_id
        WHERE Productos.id = ${id}
    ;`;
    const result = db.query(query);
    result.then((resultP) => {
        res.status(200).send(resultP);
    })
        .catch((err) => {
        res.status(500).json({ message: "Error al obtener producto", error: err });
    });
};
//# sourceMappingURL=productos.js.map