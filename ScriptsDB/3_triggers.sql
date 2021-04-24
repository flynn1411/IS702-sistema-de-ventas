DELIMITER $$

-- Trigger Orden de Compra
CREATE TRIGGER tr_orden_compra
AFTER UPDATE ON Ordenes_Compras 
FOR EACH ROW
BEGIN
    INSERT INTO Inventario(sucursales_id,producto_id,existencia,descripcion,tipo_impuesto_id,impuesto,subtotal) 
    VALUES (1,new.producto_id,new.cantidad,"Pedido Completado",1,0.15,new.precio_compra);
    
    INSERT INTO mov_inventario(producto_id,movimiento_id,cantidad,precio) 
    VALUES (new.producto_id,1,new.cantidad,new.precio_compra);
    
END $$

-- Trigger Encriptar
CREATE TRIGGER tr_encriptar
BEFORE INSERT ON Usuarios
FOR EACH ROW
BEGIN
    SET NEW.contrasena = AES_ENCRYPT(NEW.contrasena,"admin");
END$$
DELIMITER ;