USE SistemaVentas;

DELIMITER $$

-- Contraseña de Encriptado
SET @key = "admin";

-- Mostrar Fabricante
DROP PROCEDURE IF EXISTS sp_obtenerFabricante$$
CREATE PROCEDURE sp_obtenerFabricante()
BEGIN
    SELECT 
        id,nombre as "Nombre" 
    FROM 
        Fabricantes; 
END$$

-- Mostrar Tipo
DROP PROCEDURE IF EXISTS sp_obtenerTipo$$
CREATE PROCEDURE sp_obtenerTipo()
BEGIN
    SELECT 
        id,nombre as "Nombre" 
    FROM 
        Tipos; 
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
    INSERT INTO 
        Productos(fabricante_id,tipo_id,modelo,descripcion) 
    VALUES
        (Fabricante_id,Tipo_id,Modelo,Descripcion);
END$$

-- Obtener productos catalago
DROP PROCEDURE IF EXISTS sp_obtenerProducto$$
CREATE PROCEDURE sp_obtenerProducto()
BEGIN
    SELECT 
        * 
    FROM 
        Productos;
END$$

-- Producto disponible para vender
DROP PROCEDURE IF EXISTS sp_obtenerProductoInventario$$
CREATE PROCEDURE sp_obtenerProductoInventario()
BEGIN
    SELECT 
        Productos.id as "id",Productos.modelo as "nombre",Inventario.existencia as "cantidad" 
    FROM 
        Inventario 
    INNER JOIN 
        Productos
    ON 
        Inventario.producto_id = Productos.id;

END$$

-- Crear una Factura
DROP PROCEDURE IF EXISTS sp_crearFactura$$
CREATE PROCEDURE sp_crearFactura(
    IN Correo VARCHAR(50),
    IN MetodoPago VARCHAR(50)
)
BEGIN
    DECLARE Direccion INT;
    DECLARE Usuario INT;
 
    SELECT @Direccion = (SELECT direccion_id FROM Usuarios WHERE correo = Correo LIMIT 1);
    SELECT @Usuario = (SELECT id FROM Usuarios WHERE correo = Correo LIMIT 1);

    INSERT INTO 
        Facturas(usuario_id,direccion_id,config_factura_id,estado_pago,en_linea)
    VALUES
        (Usuario,Direccion,1,0,1)
    ;

END$$

-- Cambiar estado de orden de compra
DROP PROCEDURE IF EXISTS sp_cambiarEstadoFactura$$


-- Unir factura con productos
DROP PROCEDURE IF EXISTS sp_factura_x_producto$$
CREATE PROCEDURE sp_factura_x_producto()
BEGIN

END$$

-- Mostrar datos de usuario
DROP PROCEDURE IF EXISTS sp_obtenerUsuario$$
CREATE PROCEDURE sp_obtenerUsuario(
    IN EMAIL VARCHAR(100)
)
BEGIN
    Declare temp VARCHAR(50);

    SET @temp = EMAIL;

    SELECT 
        id,primer_nombre, segundo_nombre, primer_apellido, segundo_apellido,
        correo,num_telefono,direccion_id,rol, 
        CAST(AES_DECRYPT(contrasena,"admin") AS CHAR(100)) AS contrasena,
        CAST(AES_DECRYPT(num_tarjeta,"admin") AS CHAR(30)) AS num_tarjeta
    FROM 
        Usuarios
    WHERE 
        correo = @temp
    ; 
END$$

-- Crear usuarios web
DROP PROCEDURE IF EXISTS sp_crearUsuario$$
CREATE PROCEDURE sp_crearUsuario(
    IN Primer_nombre VARCHAR(30),
    IN Segundo_nombre VARCHAR(30),
    IN Primer_apellido VARCHAR(30) ,
    IN Segundo_apellido VARCHAR(30),
    IN Correo VARCHAR(50),
    IN Contrasena VARBINARY(1000) ,
    IN Num_telefono VARCHAR(30),
    IN Direccion_id INT
)
BEGIN
    INSERT INTO Usuarios 
        (primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,contrasena,num_telefono,direccion_id,rol) 
    VALUES 
        (Primer_nombre,Segundo_nombre,Primer_apellido,Segundo_apellido,Correo, Contrasena,Num_telefono,Direccion_id,2)
    ;
END$$

DELIMITER ;