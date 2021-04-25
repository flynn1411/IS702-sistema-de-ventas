DELIMITER $$
CREATE TRIGGER tr_encriptar2
BEFORE INSERT ON Usuarios
FOR EACH ROW
BEGIN
    SET NEW.contrasena := AES_ENCRYPT(NEW.contrasena,"admin");
END$$

DELIMITER ;
SELECT 
        id,primer_nombre, segundo_nombre, primer_apellido, segundo_apellido,
        correo,num_telefono,direccion_id,rol, 
        CAST(AES_DECRYPT(contrasena,@key) AS CHAR(100)) AS contrasena,
        CAST(AES_DECRYPT(num_tarjeta,@key) AS CHAR(30)) AS num_tarjeta
    FROM 
        Usuarios
    WHERE 
        correo = 'user5'
    ; 