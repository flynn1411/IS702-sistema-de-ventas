DELIMITER 

DROP PROCEDURE IF EXISTS sp_obtenerProductoInventario$$
CREATE PROCEDURE sp_obtenerProductoInventario()
BEGIN
    SELECT Productos.id as "id",Productos.modelo as "nombre",Inventario.existencia as "cantidad" FROM Inventario 
    INNER JOIN Productos
    ON Inventario.producto_id = Productos.id;

END$$
DELIMITER ;

INSERT INTO Regiones VALUES
    (1, 'Occidente'),
    (2, 'Sur'),
    (3, 'Central'),
    (4, 'Norte'),
    (5, 'Oriente'),
    (6, 'Otro')
;

INSERT INTO Paises VALUES
    (1, 'Honduras', 3),
    (2, 'El Salvador', 3),
    (3, 'Guatemala', 3),
    (4, 'Estados Unidos', 4),
    (5, 'Chile', 2),
    (6, 'Colombia', 2),
    (7, 'Nicaragua', 3)
;

INSERT INTO Ciudades VALUES
    (1, 'Santa Rosa de Copan', 1, 6),
    (2, 'San Pedro Sula', 1, 6),
    (3, 'Tegucigalpa', 1, 6),
    (4, 'La Ceiba', 1, 6),
    (5, 'Quetzaltenango', 2, 6),
    (6, 'Ciudad de Guatemala', 3, 6),
    (7, 'New York', 4, 6),
    (8, 'Santiago', 5, 6),
    (9, 'Bogota', 6, 6),
    (10, 'Managua', 7, 6)
;

INSERT INTO Direcciones VALUES
    (1, 'Sentenario', 6, 1, 2),
    (2, 'Real', 6, 1, 3),
    (3, 'La Provincia', 6, 1, 4),
    (4, 'Las Mercedes', 6, 1, 1),
    (5, 'Wall Street', 6, 4, 1),
    (6, 'Quetzal', 6, 2, 5),
    (7, 'Los Narcos', 6, 5, 8),
    (8, 'Villa Real', 6, 6, 9),
    (9, 'Las Brisas', 6, 7, 10)
;

INSERT INTO Roles VALUES
    (1, 'WEB'),
    (2, 'Custom')
;

INSERT INTO Fabricantes VALUES
    (1, 'Oppo'),
    (2, 'Huawei'),
    (3, 'Samsung'),
    (4, 'Plasticos Herrera'),
    (5, 'Telar Calidad'),
    (6, 'Textiles SA'),
    (7, 'Fabricadora Martinez')
;

INSERT INTO Tipos VALUES
    ('Telefonia'),
    ('Telas'),
    ('Plasticos'),
    ('Otros')
;

INSERT INTO Proveedores VALUES
    ('Plasticos Don Ilario S.A.', 'donilario@gmail.com', '98212312', 1),
    ('De todo un poco S. de R. L.', 'detodounpoco@gmail.com', '922322132', 1),
    ('Syscomp S.A.', 'sysa112233@gmail.com', '32125182', 2),
    ('CaribeComp', 'caribecomp@gmail.com', '97515322', 3),
    ('Granos Santa Maria', 'santamariagranos@gmail.com', '226214462', 1),
    ('Plasticos Don Ilario S.A.', 'donilario@gmail.com', '98212312', 4),
    ('Variedades Ana', 'anavariedades@gmail.com', '93588652', 5)
;

INSERT INTO Sucursales VALUES
    ('Variedades', 3, 1, 3, 3, '98891921', 'variedadesproductossa@yahoo.es')
;

INSERT INTO Tipo_Impuestos VALUES
    (12, true, true),
    (15, true, true),
    (18, true, true)
;

INSERT INTO Tipos_Docmentos VALUES
    ('Cheque', 'Documento fisico'),
    ('Pagare', 'Documento fisico'),
    ('Tarjeta', 'Documento fisico')
;
