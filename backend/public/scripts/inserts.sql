-- Inserts iniciales en la Base de datos

-- Deshabilitar el modo de actualizacion seguro
SET SQL_SAFE_UPDATES = 0;

-- Configuracion de la factura
INSERT INTO Tipos_Mov(codigo,nombre,movimiento) VALUES 
    ("v","venta",-1),
    ("c","compra",1),
    ("d","desechado",-1)
;

-- Tipos de Impuestos
INSERT INTO Tipo_Impuestos(porcentaje,activo,requerido) VALUES 
    (0.15,1,1),
    (0.18,1,1),
    (0.21,1,0)
;

-- Tipo de Documentos
INSERT INTO Tipos_Docmentos(nombre,descripcion) VALUES 
    ("Facturas","Documento de Tipo Factura"),
    ("Recibo","Documento de Tipo Recibo"),
    ("Alquiler","Documento de Tipo Alquiler"),
    ("Honorarios","Documento de Tipo Honorarios"),
    ("Credito","Documento de Tipo Credito"),
    ("Debito","Documento de Tipo Debito"),
    ("Retencion","Documento de Tipo Comprobante de Retencion")
;

-- Regiones 
INSERT INTO Regiones(nombre) VALUES 
    ("Asia"),
    ("Asia del Oeste y Africa del Norte"),
    ("Africa"),
    ("Europa y Asia Central"),
    ("Europa"),
    ("América del Norte y Oceanía"),
    ("América Latina y el Caribe")
;

INSERT INTO Paises(nombre,region_id) VALUES
    ("Afganistán",1),
    ("Bangladesh",1),
    ("Bután",1),
    ("Brunei",1),
    ("Kampuchea",1),
    ("R.P.D. de Corea",1),
    ("Timor Oriental",1),
    ("India",1),
    ("Indonesia",1),
    ("Japón",1),
    ("Laos",1),
    ("Malasia",1),
    ("Maldivas",1),
    ("Mongolia",1),
    ("Myanmar",1),
    ("Nepal",1),
    ("Pakistán",1),
    ("Filipinas",1),
    ("República de Corea",1),
    ("Singapur",1),
    ("Sri Lanka",1),
    ("Tailandia",1),
    ("Vietnam",1),
    ("Argelia",2),
    ("Bahrein",2),
    ("Egipto",2),
    ("Irán",2),
    ("Iraq",2),
    ("Israel",2),
    ("Jordania",2),
    ("Kuwait",2),
    ("Líbano",2),
    ("Libia",2),
    ("Mauritania",2),
    ("Marruecos",2),
    ("Omán",2),
    ("Palestina",2),
    ("Qatar",2),
    ("Arabia Saudita2",2),
    ("Sudán",2),
    ("Siria",2),
    ("Túnez",2),
    ("Turquía",2),
    ("Emiratos Arabes Unidos",2),
    ("Yemen",2),
    ("Angola",3),
    ("Benin",3),
    ("Botswana",3),
    ("Burundi",3),
    ("Cabo Verde",3),
    ("Comores",3),
    ("República de Africa Central",3),
    ("Camerún",3),
    ("República del Congo",3),
    ("Congo Kinshasa",3),
    ("Costa de Marfil",3),
    ("Jibuti",3),
    ("Guinea Ecuatorial",3),
    ("Eritrea",3),
    ("Etiopía",3),
    ("Gabón",3),
    ("Gambia",3),
    ("Ghana",3),
    ("Guinea Bissau",3),
    ("Kenia",3),
    ("Lesotho",3),
    ("Liberia",3),
    ("Madagascar",3),
    ("Malí",3),
    ("Mauricio",3),
    ("Mozambique",3),
    ("Namibia",3),
    ("Niger",3),
    ("Nigeria",3),
    ("Ruanda",3),
    ("Sao Tomé y Príncipe",3),
    ("Senegal",3),
    ("Seychelles",3),
    ("Sierra Leona",3),
    ("Somalia",3),
    ("Africa del Sur",3),
    ("Tanzania",3),
    ("Togo",3),
    ("Uganda",3),
    ("Zambia",3),
    ("Zimbabwe",3),
    ("Armenia",4),
    ("Azerbaiján",4),
    ("Bielorusia",4),
    ("Georgia",4),
    ("Kazakstán",4),
    ("Kirguizistán",4),
    ("Moldavia",4),
    ("Rusia",4),
    ("Tadjikistán",4),
    ("Turkmenistán",4),
    ("Ucrania",4),
    ("Uzbekistán",4),
    ("Chipre",5),
    ("Albania",5),
    ("Bosnia y Herzegovina",5),
    ("Bulgaria",5),
    ("Croacia",5),
    ("Checo",5),
    ("Estonia",5),
    ("Hungría",5),
    ("Letonia",5),
    ("Lituania",5),
    ("Macedonia",5),
    ("Polonia",5),
    ("Rumania",5),
    ("Eslovaquia",5),
    ("Eslovenia",5),
    ("Serbia y Montenegro",5),
    ("Andorra",5),
    ("Austria",5),
    ("Bélgica",5),
    ("Dinamarca",5),
    ("Finlandia",5),
    ("Francia",5),
    ("Alemania",5),
    ("Grecia",5),
    ("Islandia",5),
    ("Italia",5),
    ("Irlanda",5),
    ("Liechtenstein",5),
    ("Luxemburgo",5),
    ("Malta",5),
    ("Mónaco",5),
    ("Holanda",5),
    ("Noruega",5),
    ("Portugal",5),
    ("España",5),
    ("Suecia",5),
    ("Suiza",5),
    ("Gran Bretaña",5),
    ("Australia",6),
    ("Canadá",6),
    ("Islas de Cook",6),
    ("Fiji",6),
    ("Kiribati",6),
    ("Micronesie",6),
    ("Nueva Zelanda",6),
    ("Papúa Nueva Guinea",6),
    ("Samoa",6),
    ("Tonga",6),
    ("Estados Unidos",6),
    ("Vanuatu",6),
    ("Antigua y Barbuda",7),
    ("Argentina",7),
    ("Bahamas",7),
    ("Barbados",7),
    ("Bolivia",7),
    ("Brasil",7),
    ("Chile",7),
    ("Colombia",7),
    ("Costa Rica",7),
    ("Cuba",7),
    ("Dominica",7),
    ("Ecuador",7),
    ("El Salvador",7),
    ("Granda",7),
    ("Guyana",7),
    ("Guatemala",7),
    ("Honduras",7),
    ("Jamaica",7),
    ("México",7),
    ("Panamá",7),
    ("Perú",7),
    ("República Dominicana",7),
    ("Surinam",7),
    ("Trinidad y Tobago",7),
    ("Uruguay",7),
    ("Venezuela",7)
;

-- Ciudades
INSERT INTO Ciudades(nombre,pais_id,region_id) VALUES 
    ("Tegucigalpa",165,7),
    ("San Pedro Sula",165,7),
    ("Comayagua",165,7),
    ("La Ceiba",165,7),
    ("Olancho",165,7)
;

-- Direcciones
INSERT INTO Direcciones(calle,region_id,pais_id,ciudad_id) VALUES
    ("Col vista hermosa",7,165,1),
    ("Col Altos de Canaan",7,165,1),
    ("Col San Francisco",7,165,1),
    ("Col Humuya",7,165,1),
    ("Col San Buena",7,165,2),
    ("Col San Carlos",7,165,2),
    ("Col Carrizal",7,165,2),
    ("Col Torocagua",7,165,2),
    ("Col Brisas del Sitio",7,165,3),
    ("Col Countri",7,165,3),
    ("Col Flor del campo",7,165,3),
    ("Col Nueva Capital",7,165,3),
    ("Col El Pedregal",7,165,4),
    ("Col La Juventud 2",7,165,4),
    ("Taulabe centro",7,165,4),
    ("San Martin",7,165,4),
    ("Col Aurelio Soto",7,165,5),
    ("Col Resignacion sur",7,165,5),
    ("Col La concordia",7,165,5),
    ("Col La laguna",7,165,5)
;

-- Proveedores
INSERT INTO Proveedores(nombre,correo,num_telefono,direccion_id) VALUES
    ("Beltronica","beltronicahn@gmail.com","9892-9234",3),
    ("Gv Informatica","gv@gmail.com","9929-2223",6),
    ("Globomatik","globomatik@outlock.com","3323-0967",9),
    ("FerSay","fersay@yahoo.com","8283-2356",12)
;

-- Sucursales
INSERT INTO Sucursales(nombre,region_id,pais_id,ciudad_id,direccion_id,num_telefono,correo) VALUES 
    ("Sucursal 1",7,165,1,1,"9821-9634","caliventas@gmail.com"),
    ("Sucursal 2",7,165,2,5,"9323-3234","caliventas@gmail.com"),
    ("Sucursal 3",7,165,3,10,"9351-8834","caliventas@gmail.com"),
    ("Sucursal 4",7,165,4,13,"9231-6564","caliventas@gmail.com")
;

-- Config partidas
INSERT INTO Config_Facturas(tipo_documento_id,sucursal_id,fecha_inicio,fecha_final,fecha_creacion,valor_sig,valor_inicial,valor_final,formato,activo) VALUES
    (1,1,"2021-04-24","2021-12-31","2021-04-23",2,1,5000,"001-001-01",1),
    (1,2,"2021-04-24","2021-12-31","2021-04-23",2,1,5000,"001-002-01",1),
    (1,3,"2021-04-24","2021-12-31","2021-04-23",2,1,5000,"001-003-01",1),
    (1,4,"2021-04-24","2021-12-31","2021-04-23",2,1,5000,"001-004-01",1)
;

-- Fabricantes
INSERT INTO Fabricantes(nombre) VALUES 
    ("Apple"),
    ("Dell"),
    ("Lenovo"),
    ("Hp"),
    ("Asus"),
    ("Acer"),
    ("Razer"),
    ("Microsoft"),
    ("MSI"),
    ("Samsung"),
    ("Toshiba"),
    ("Sony"),
    ("Google"),
    ("Intel"),
    ("AMD")
;

-- Tipos de computadoras
INSERT INTO Tipos(nombre) VALUES 
    ("Computadoras"),
    ("Camaras"),
    ("Telefonos"),
    ("Televisores")
;

-- Roles de Usurios
INSERT INTO Roles(rol) VALUES 
    ("administrador"),
    ("cliente"),
    ("vendedor")
;

INSERT INTO Usuarios(primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,contrasena,num_telefono,direccion_id,rol,num_tarjeta) VALUES
    ("Admin","Admin","Admin","Admin","admin",AES_ENCRYPT("admin1234","admin"),"admin",15,1,AES_ENCRYPT("0000-0000","admin")),
    ("Nelson","Jafet","Sambula","Palacios","nelson.sambula@unah.hn",AES_ENCRYPT("nelson1234","admin"),"9898-9080",2,2,AES_ENCRYPT("0000-0000","admin")),
    ("Luis", "Gerardo", "Gutierrez", "Perdomo","lggutierrez@unah.hn",AES_ENCRYPT("luis1234","admin") , "98891920", 11, 3,"")
;

INSERT INTO Productos(fabricante_id,tipo_id,modelo,descripcion) VALUES 
    (1,1,"MacBook Pro","Computadora macbook"),
    (1,1,"MacBook Air","Computadora macbook"),
    (1,1,"Mac Mini","Computadora macbook"),
    (1,1,"iMac","Computadora macbook"),
    (2,1,"Inspiron","Computadora Dell"),
    (2,1,"XPS","Computadora Dell"),
    (2,1,"Alienware","Computadora Dell"),
    (2,1,"G","Computadora Dell"),
    (12,2,"Cyber-shot DSC-RX100", "Camara Profesional"),
    (12,2,"Lumix GM1", "Camara Profesional"),
    (12,2,"XZ-2", "Camara Profesional"),
    (12,2,"Fujifilm X10", "Camara Profesional"),
    (10,4,"32LM630BPLA", "TV Profesional"),
    (10,4, "X900", "TV Profesional"),
    (10,4, "A90J XR Bravia Master", "TV Profesional"),
    (11,4, "CX OLED", "TV Profesional"),
    (11,4, "Serie 6 de 65 pulgadas", "TV Profesional"),
    (10,3,"Galaxy 20","Smartphone"),
    (11,3,"Droid mx","Smartphone")
;

INSERT INTO Inventario(sucursales_id,producto_id,existencia,descripcion,tipo_impuesto_id,impuesto,subtotal) VALUES
    (1,1,400,"Comptadora macbook",1,0,17232.23),
    (2,3,1000,"Mac mini",1,0,32323.23)
;