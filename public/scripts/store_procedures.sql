USE SistemaVentas;

DELIMITER $$

-- Contraseña de Encriptado
SET @key = "admin";

-- Mostrar Fabricante
DROP PROCEDURE IF EXISTS sp_obtenerFabricante$$
CREATE PROCEDURE sp_obtenerFabricante()
BEGIN
    SELECT id,nombre as "Nombre" FROM Fabricantes; 
END$$

-- Mostrar Tipo
DROP PROCEDURE IF EXISTS sp_obtenerTipo$$
CREATE PROCEDURE sp_obtenerTipo()
BEGIN
    SELECT id,nombre as "Nombre" FROM Tipos; 
END$$

-- Crear producto
DROP PROCEDURE IF EXISTS sp_crearProducto$$
CREATE PROCEDURE sp_crearProducto(
    IN Fabricante_id INT ,
    IN Tipo_id INT ,
    IN Modelo VARCHAR(200),
    IN Descripcion TEXT
)
BEGIN
    INSERT INTO Productos(fabricante_id,tipo_id,modelo,descripcion) VALUES
    (Fabricante_id,Tipo_id,Modelo,Descripcion);
END$$


-- Obtener productos catalago
DROP PROCEDURE IF EXISTS sp_obtenerProducto$$
CREATE PROCEDURE sp_obtenerProducto()
BEGIN
    SELECT * FROM Productos;
END$$

-- Producto disponible para vender
DROP PROCEDURE IF EXISTS sp_obtenerProductoInventario$$
CREATE PROCEDURE sp_obtenerProductoInventario()
BEGIN
    SELECT Productos.id as "id",Productos.modelo as "nombre",Inventario.existencia as "cantidad" FROM Inventario 
    INNER JOIN Productos
    ON Inventario.producto_id = Productos.id;

END$$
DELIMITER ;

