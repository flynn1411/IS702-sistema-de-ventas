USE SistemaVentas;

DELIMITER $$

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
    IN CORREO VARCHAR(50),
    IN METODOPAGO VARCHAR(50)
)
BEGIN
    DECLARE d INT;
    DECLARE u INT;
    DECLARE m VARCHAR(50);
    DECLARE p INT;

    SET @m = METODOPAGO;        
    SET @d = (SELECT direccion_id FROM Usuarios WHERE correo = CORREO LIMIT 1);
    SET @u = (SELECT id FROM Usuarios WHERE correo = CORREO LIMIT 1);

    INSERT INTO 
        Pagos(metodo_pago)
    VALUES
        (@m)
    ;

    SET @p = (SELECT id FROM Pagos ORDER BY id DESC LIMIT 1);

    INSERT INTO 
        Facturas(usuario_id,direccion_id,config_factura_id,estado_pago,en_linea,pago_id,total)
    VALUES
        (@u,@d,1,0,1,@p,0)
    ;

END$$

-- Cambiar estado de orden de compra
DROP PROCEDURE IF EXISTS sp_cambiarEstadoCompra$$
CREATE PROCEDURE sp_cambiarEstadoCompra(
    IN ID INT
)
BEGIN
    UPDATE 
	    Ordenes_Compras
    SET 
	    estado = 1
    WHERE 
	    id = ID
    ;
END$$


-- Unir factura con productos
DROP PROCEDURE IF EXISTS sp_vincularFactura$$
CREATE PROCEDURE sp_vincularFactura(
    IN FACTURA INT,
    IN PRODUCTO INT,
    IN CANTIDAD INT
)
BEGIN
    DECLARE f INT;
    DECLARE p INT;
    DECLARE i INT;
    DECLARE Iactual INT;

    SET @f = FACTURA; 
    SET @p = PRODUCTO;
    SET @i = CANTIDAD;
    SET @Iactual = (SELECT existencia FROM Inventario WHERE producto_id = @p ORDER BY id DESC LIMIT 1);

    INSERT INTO Facturas_x_Productos
        (factura_id, producto_id,cantidad)
    VALUES
        (@f,@p,@i)
    ;

    UPDATE
        Inventario
    SET
        existencia = @Iactual - @i
    WHERE
        id = @inv
    ;

    INSERT INTO 
        Mov_Inventario(producto_id,movimiento_id,cantidad,precio) 
    VALUES 
        (@p,1,@i,(SELECT subtotal FROM Inventario WHERE producto_id = @p ORDER BY id DESC LIMIT 1));
        
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

-- Crear orden de compra
DROP PROCEDURE IF EXISTS sp_crearOrden$$
CREATE PROCEDURE sp_crearOrden(
    IN PROVEEDOR INT,
    IN PRODUCTO INT,
    IN CANTIDAD INT,
    IN PRECIO DECIMAL(10,2)
)
BEGIN
    INSERT INTO Ordenes_Compras
        (proveedor_id,producto_id,cantidad,precio_compra)
    VALUES
        (PROVEEDOR,PRODUCTO,CANTIDAD,PRECIO)
    ;
END$$

-- Obtener Pago
DROP PROCEDURE IF EXISTS sp_obtenerPagos$$
CREATE PROCEDURE sp_obtenerPagos()
BEGIN
    SELECT * FROM Pagos;
END$$

-- Obtener Facturas
DROP PROCEDURE IF EXISTS sp_obtenerFacturas$$
CREATE PROCEDURE sp_obtenerFacturas()
BEGIN
    SELECT
    Facturas.id AS id,
    Facturas.usuario_id AS usuario_id,
    Usuarios.primer_nombre AS primer_nombre,
    Usuarios.primer_apellido AS primer_apellido,
    Facturas.direccion_id AS direccion_id,
    Direcciones.calle AS calle,
    Facturas.config_factura_id AS config_factura_id,
    Facturas.num_factura AS num_factura,
    Facturas.fecha AS fecha,
    Facturas.exento AS exento,
    Facturas.exonerado AS exonerado,
    Facturas.total AS total,
    Facturas.pago_id AS pago_id,
    Pagos.metodo_pago AS metodo_pago,
    Facturas.estado_pago AS estado_pago,
    Facturas.en_linea AS en_linea,
    Facturas.envio_id AS envio_id,
    Envios.nombre_empresa AS nombre_empresa 
    FROM 
        Facturas
    INNER JOIN 
        Usuarios
    ON 
        Facturas.usuario_id = Usuarios.id
    INNER JOIN
        Direcciones
    ON
        Facturas.direccion_id = Direcciones.id
    INNER JOIN
        Pagos
    ON 
        Facturas.pago_id = Pagos.id
    INNER JOIN
        Envios
    ON
        Facturas.envio_id = Envios.id
    ;
END$$

-- Obtener Inventario
DROP PROCEDURE IF EXISTS sp_obtenerInventario$$
CREATE PROCEDURE sp_obtenerInventario()
BEGIN

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
    ;
END$$

-- Obtener facturas x productos
DROP PROCEDURE IF EXISTS sp_obtenerFacPro$$
CREATE PROCEDURE sp_obtenerFacPro()
BEGIN
    SELECT * FROM Facturas_x_Productos;
END$$

-- Obtener ordenes de compras
DROP PROCEDURE IF EXISTS sp_obtenerOrdenes$$
CREATE PROCEDURE sp_obtenerOrdenes()
BEGIN
    SELECT 
        Ordenes_Compras.id AS id, Proveedores.nombre AS provedores,Productos.modelo AS producto, 
        Ordenes_Compras.cantidad AS cantidad,Ordenes_Compras.precio_compra AS precio_compra, 
        Ordenes_Compras.fecha_orden AS fecha_orden, Ordenes_Compras.estado AS estado
    FROM 
        Ordenes_Compras 
    INNER JOIN 
        Proveedores 
    ON 
        Ordenes_Compras.proveedor_id = Proveedores.id
	INNER JOIN 
		Productos
	ON 
		Ordenes_Compras.producto_id = Productos.id
    ;
END$$

-- Obtener movimiento de inventario
DROP PROCEDURE IF EXISTS sp_obtenerMovimiento$$
CREATE PROCEDURE sp_obtenerMovimiento()
BEGIN
    SELECT * FROM Mov_Inventario;
END$$

-- Obtener empresa de envio
DROP PROCEDURE IF EXISTS sp_obtenerEnvio$$
CREATE PROCEDURE sp_obtenerEnvio()
BEGIN
    SELECT * FROM Envios;
END$$

-- Cambiar estado de pago
DROP PROCEDURE IF EXISTS sp_cambiarPago$$
CREATE PROCEDURE sp_cambiarPago(
    IN ID INT
)
BEGIN
    UPDATE 
        Facturas
    SET 
        estado_pago = 1, envio_id = 1
    WHERE
        id = ID
;
END$$

-- Obtener Inventario por Tipo
DROP PROCEDURE IF EXISTS sp_obtenerInventarioTipo$$
CREATE PROCEDURE sp_obtenerInventarioTipo(
    IN ID INT
)
BEGIN
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
        WHERE 
            Productos.tipo_id = ID
    ;
END$$

-- Obtener Inventario por fabricante
DROP PROCEDURE IF EXISTS sp_obtenerInventarioFabricante$$
CREATE PROCEDURE sp_obtenerInventarioFabricante(
    IN ID INT
)
BEGIN
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
END$$
DELIMITER ;



