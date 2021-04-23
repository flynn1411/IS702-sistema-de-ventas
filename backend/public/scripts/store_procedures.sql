DELIMITER $$
DROP PROCEDURE IF EXISTS sp_obtenerFabricante$$
CREATE PROCEDURE sp_obtenerFabricante()
BEGIN
    SELECT id,nombre as "Nombre" FROM Fabricantes; 
END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS sp_obtenerTipo$$
CREATE PROCEDURE sp_obtenerTipo()
BEGIN
    SELECT id,nombre as "Nombre" FROM Tipos; 
END$$
DELIMITER ;