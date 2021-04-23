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


-- obtener productos
DROP PROCEDURE IF EXISTS sp_obtenerProducto$$
CREATE PROCEDURE sp_obtenerProducto()
BEGIN
    SELECT * FROM Productos;
END$$


DELIMITER ;

