import { Request, Response } from "express";
const db = require("../database");

export const createProduct = (req: Request & any, res: Response) => {
    const product = req.body;
    console.log("create product: ", product);
    const result: Promise<any> = db.query("INSERT INTO Productos SET ? ", product);
    result.then((resultP: any) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        console.error("Error al agregar producto: ", err);
        res.status(500).json({ message: "Error al crear productor", error: err });
    });
    console.log("result: ", result.then);
};

export const updateProduct = (req: Request & any, res: Response) => {
    const product = req.body;
    const id = Number(req.params);
    const result = db.query("UPDATE Productos SET name = 'samsun' WHERE id = 2");
    result.then((resultP: any) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        console.error("Error al actualizar producto: ", err);
        res.status(500).json({ message: "Error al actualizar productor", error: err });
    });
};

export const getProduct = (req: Request & any, res: Response) => {
    const id = req.params;
    const result = db.query("SELECT * FROM Productos WHERE id = ? ", id);
    result.then((resultP: any) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        console.error("Error al obtener productos: ", err);
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
};

export const getProducts = (req: Request & any, res: Response) => {
    const result = db.query("SELECT * FROM Productos");
    result.then((resultP: any) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        console.error("Error al obtener productos: ", err);
        res.status(500).json({ message: "Error al obtener productos", error: err });
    });
    console.log("result: ", result);
};

export const deleteProduct = (req: Request & any, res: Response) => {
    const id = req.params;
    const result = db.query("DELETE FROM Productos WHERE id = ? ", id);
    result.then((resultP: any) => {
        console.log("result: ", resultP);
        res.status(200).send(resultP);
    })
    .catch((err: any) => {
        console.error("Error al eliminar producto: ", err);
        res.status(500).json({ message: "Error al eliminar productor", error: err });
    });
    console.log("result: ", result);
};
