import { Request, Response } from "express";
const db = require("../db_connection");

export const agregarProducto = (req: Request & any, res: Response) => {
    const product = req.body;
    const query = "";
    const result: Promise<any> = db.query(query, product);
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al crear producto", error: err });
    });
};

export const obtenerProductos = (req: Request & any, res: Response) => {
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
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
};
export const obtenerProductosPorCategoria = (req: Request & any, res: Response) => {
    console.log("obtener productos por categoria");
    const id = req.params.id;
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
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener productos por categoria", error: err });
    });
};

export const obtenerProductosPorFabricante = (req: Request & any, res: Response) => {
    console.log("obtener productos por fabricante");
    const id = req.params.id;
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
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener productos por fabricante", error: err });
    });
};

export const obtenerProducto = (req: Request & any, res: Response) => {
    console.log("obtener producto");
    const id = req.params.id;
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
    result.then((resultP: any) => {
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        res.status(500).json({ message: "Error al obtener producto", error: err });
    });
};
