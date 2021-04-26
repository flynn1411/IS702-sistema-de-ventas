DELIMITER $$

-- Trigger Orden de Compra
CREATE TRIGGER tr_orden_compra
AFTER UPDATE ON Ordenes_Compras 
FOR EACH ROW
BEGIN
    INSERT INTO Inventario(sucursales_id,producto_id,existencia,descripcion,tipo_impuesto_id,impuesto,subtotal) 
    VALUES (1,new.producto_id,new.cantidad,"Pedido Completado",1,(0.15 * new.precio_compra),new.precio_compra + (0.15 * new.precio_compra));
    
    INSERT INTO Mov_Inventario(producto_id,movimiento_id,cantidad,precio) 
    VALUES (new.producto_id,2,new.cantidad,new.precio_compra);
    
END $$

-- Trigger Encriptar
CREATE TRIGGER tr_encriptar
BEFORE INSERT ON Usuarios
FOR EACH ROW
BEGIN
    SET NEW.contrasena := AES_ENCRYPT(NEW.contrasena,"admin");
END$$

-- Trigger Precio Producto
CREATE TRIGGER tr_actualizarTotal
AFTER INSERT ON Facturas_x_Productos
FOR EACH ROW
BEGIN
    DECLARE precioActual DECIMAL(10,2);
    DECLARE precioProducto DECIMAL(10,2);
    DECLARE inv INT;
    DECLARE exis INT;

    SET @precioActual := (SELECT total FROM Facturas WHERE id = NEW.factura_id);
    SET @precioProducto := (SELECT subtotal FROM Inventario WHERE producto_id = NEW.producto_id) * NEW.cantidad;
    SET @exis := (SELECT existencia FROM Inventario WHERE producto_id = NEW.producto_id ORDER BY id DESC LIMIT 1);
    SET @inv := (SELECT id FROM Inventario WHERE producto_id = NEW.producto_id ORDER BY id DESC LIMIT 1);
    
    UPDATE
        Facturas
    SET 
        total = @precioActual + @precioProducto
    WHERE
        id = NEW.factura_id
    ;

END$$

DELIMITER ;