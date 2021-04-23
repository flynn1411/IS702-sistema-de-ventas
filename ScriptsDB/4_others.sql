-- Procedimientos almacenados complementarios
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


-- obtener producto por id
DROP PROCEDURE IF EXISTS sp_obtenerProductoID$$
CREATE PROCEDURE sp_obtenerProductoID(
    IN ID INT
)
BEGIN
    SELECT * FROM Productos WHERE id = ID;
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