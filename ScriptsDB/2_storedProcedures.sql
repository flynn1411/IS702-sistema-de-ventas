USE SistemaVentas;

DELIMITER $$

-- Contraseña de Encriptado
SET @key = "admin";

-- Inicializar con usuario administrador
DROP PROCEDURE IF EXISTS sp_inicializar$$
CREATE PROCEDURE sp_inicializar()
BEGIN
    -- Inicializar los roles si no existen 
    IF (SELECT COUNT(*) FROM Roles) = 0 THEN
        INSERT INTO Roles(rol) VALUES ("administrador");
        INSERT INTO Roles(rol) VALUES ("cliente");
        INSERT INTO Roles(rol) VALUES ("vendedor");
    END IF;
    -- Inicializar usuario administrador del sistema
    IF (SELECT COUNT(*) FROM Usuarios) = 0 THEN
        INSERT INTO Usuarios (primer_nombre,primer_apellido,correo,contrasena,rol) 
        VALUES ("administrador","administrador","administrador@sistema",AES_ENCRYPT("admin", @key),1);
    END IF;
END$$

-- Crear usuarios web
DROP PROCEDURE IF EXISTS sp_crearUsuario$$
CREATE PROCEDURE sp_crearUsuario(
    IN pNombre VARCHAR(30),
    IN sNombre VARCHAR(30),
    IN pApellido VARCHAR(30),
    IN sApellido VARCHAR(30),
    IN Correo VARCHAR(50),
    IN Contra VARBINARY(30)
)
BEGIN
        INSERT INTO Usuarios (primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,contrasena,rol) 
        VALUES (pNombre,sNombre,pApellido,sApellido,Correo,AES_ENCRYPT(Contra, @key),2);
END$$

-- Crear usuarios web con rol
DROP PROCEDURE IF EXISTS sp_crearUsuarioRol$$
CREATE PROCEDURE sp_crearUsuarioRol(
    IN pNombre VARCHAR(30),
    IN sNombre VARCHAR(30),
    IN pApellido VARCHAR(30),
    IN sApellido VARCHAR(30),
    IN Correo VARCHAR(50),
    IN Contra VARBINARY(30),
    IN Rol INT
)
BEGIN
    INSERT INTO Usuarios (primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,contrasena,rol) 
    VALUES (pNombre,sNombre,pApellido,sApellido,Correo,AES_ENCRYPT(Contra, @key),Rol);
END$$


-- Crear proveedor
DROP PROCEDURE IF EXISTS sp_crearProveedor$$
CREATE PROCEDURE sp_crearProveedor(
    IN Nombre VARCHAR(50),
    IN Correo VARCHAR(50),
    IN Num_telefono VARCHAR(30),
    IN Direccion_id INT
)
BEGIN
    INSERT INTO Proveedores(nombre,correo,num_telefono,direccion_id) VALUES(Nombre,Correo,Num_telefono,Direccion_id);
END$$

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

-- actualizar producto
DROP PROCEDURE IF EXISTS sp_actualizarProducto$$
CREATE PROCEDURE sp_actualizarProducto(
    IN ID INT,
    IN Fabricante_id INT ,
    IN Tipo_id INT ,
    IN Modelo VARCHAR(200),
    IN Descripcion TEXT
)
BEGIN
    UPDATE Productos 
    SET fabricante_id = Fabricante_id, tipo_id = Tipo_id, modelo = Modelo, descripcion = Descripcion
    WHERE id = ID; 
END$$

DELIMITER ;

