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
;


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
    WHERE Productos.tipo_id = 1
;


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
    WHERE Productos.fabricante_id = 1
;