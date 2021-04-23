-- mysql -u root -p
-- ------------- tablas predefinidas / automaticas -----------------
-- Regiones, Ciudades, Fabricantes, Paises, Proveedores, Sucursales, Tipo de Documentos,
-- Tipo Impuesto, Tipos de Movimiento Inventario, Tipos de Movimiento, Roles, Direcciones, envios
--
--
-- Creando Base de datos si no existe
CREATE DATABASE IF NOT EXISTS SistemaVentas CHARACTER SET utf8;
USE SistemaVentas;

CREATE TABLE IF NOT EXISTS Regiones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Regiones';

CREATE TABLE IF NOT EXISTS Regiones (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Regiones';

CREATE TABLE IF NOT EXISTS Paises (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    region_id INT NOT NULL,
    FOREIGN KEY (region_id) REFERENCES Regiones (id)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 COMMENT='Tabla de Paises';

CREATE TABLE IF NOT EXISTS Ciudades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    pais_id INT NOT NULL,
    region_id INT NOT NULL,
    FOREIGN KEY (pais_id) REFERENCES Paises(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (region_id) REFERENCES Regiones(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Ciudades';

CREATE TABLE IF NOT EXISTS Direcciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    calle VARCHAR(100) NOT NULL,
    region_id INT NOT NULL,
    pais_id INT NOT NULL,
    ciudad_id INT NOT NULL,
    FOREIGN KEY (region_id) REFERENCES Regiones(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (pais_id) REFERENCES Paises(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ciudad_id) REFERENCES Ciudades(id)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Direcciones';

CREATE TABLE IF NOT EXISTS Roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rol VARCHAR(20) NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Roles';

CREATE TABLE IF NOT EXISTS Usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    primer_nombre VARCHAR(30)NOT NULL,
    segundo_nombre VARCHAR(30),
    primer_apellido VARCHAR(30) NOT NULL,
    segundo_apellido VARCHAR(30),
    correo VARCHAR(50),
    contrasena VARCHAR(100) NOT NULL,
    num_telefono VARCHAR(30),
    direccion_id INT,
    rol INT NOT NULL,
    num_tarjeta VARCHAR(20),
    UNIQUE KEY (correo),
    FOREIGN KEY (direccion_id) REFERENCES Direcciones(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (rol) REFERENCES Roles(id)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB AUTO_INCREMENT=1 COMMENT='Tabla de Usuarios';

CREATE TABLE IF NOT EXISTS Fabricantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Fabricantes';

CREATE TABLE IF NOT EXISTS Tipos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Tipos';

CREATE TABLE IF NOT EXISTS Proveedores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    num_telefono VARCHAR(30),
    direccion_id INT NOT NULL,
    FOREIGN KEY (direccion_id) REFERENCES Direcciones(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Proveedores';

CREATE TABLE IF NOT EXISTS Productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fabricante_id INT NOT NULL,
    tipo_id INT NOT NULL,
    modelo VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    FOREIGN KEY (fabricante_id) REFERENCES Fabricantes(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(tipo_id) REFERENCES Tipos(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Productos';


CREATE TABLE IF NOT EXISTS Ordenes_Compras(
    id INT PRIMARY KEY AUTO_INCREMENT,
    proveedor_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_compra INT NOT NULL,
    fecha_orden TIMESTAMP NOT NULL,
    estado BOOL NOT NULL,
    FOREIGN KEY (proveedor_id) REFERENCES Proveedores(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Ordenes de Compras';

CREATE TABLE IF NOT EXISTS Sucursales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    region_id INT NOT NULL,
    pais_id INT NOT NULL,
    ciudad_id INT NOT NULL,
    direccion_id INT NOT NULL,
    num_telefono VARCHAR(30) NOT NULL,
    correo VARCHAR(50),
    FOREIGN KEY (region_id) REFERENCES Regiones(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (pais_id) REFERENCES Paises(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ciudad_id) REFERENCES Ciudades(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (direccion_id) REFERENCES Direcciones(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Sucursales';

CREATE TABLE IF NOT EXISTS Tipos_Mov (
    id INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    movimiento SMALLINT NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Tipos de Movimientos';

CREATE TABLE IF NOT EXISTS Mov_Inventario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT NOT NULL,
    movimiento_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10,2),
    fecha_mov TIMESTAMP NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Movimientos de Invntarios';

CREATE TABLE IF NOT EXISTS Tipo_Impuestos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    porcentaje DECIMAL(10,2),
    activo BOOL NOT NULL,
    requerido BOOL NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Tipos de Tipo_Impuestos';

CREATE TABLE IF NOT EXISTS Inventario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sucursales_id INT NOT NULL,
    producto_id INT NOT NULL,
    existencia INT NOT NULL,
    descripcion TEXT NOT NULL,
    tipo_impuesto_id INT NOT NULL,
    impuesto DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (sucursales_id) REFERENCES Sucursales(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (sucursales_id) REFERENCES Sucursales(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Inventarios';

CREATE TABLE IF NOT EXISTS Paquetes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_paquete VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_paquete DATE NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Paquetes';

CREATE TABLE IF NOT EXISTS Productos_Paquetes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT,
    paquetes_id INT,
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (paquetes_id) REFERENCES Paquetes(id)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Paquetes de Productos';

CREATE TABLE IF NOT EXISTS Tipos_Docmentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Tipo de Documentos';

CREATE TABLE IF NOT EXISTS Envios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_empresas VARCHAR(50) NOT NULL,
    num_telefono VARCHAR(30) NOT NULL,
    correo VARCHAR(50)
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Envios';

CREATE TABLE IF NOT EXISTS Config_Facturas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo_documento_id INT NOT NULL,
    sucursal_id INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_final DATE NOT NULL,
    fecha_creacion DATE NOT NULL,
    valor_inicial INT NOT NULL,
    valor_sig INT NOT NULL,
    valor_final INT NOT NULL,
    formato VARCHAR(20) NOT NULL,
    activo BOOL NOT NULL,
    FOREIGN KEY (sucursal_id) REFERENCES Sucursales(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tipo_documento_id) REFERENCES Tipos_Docmentos(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Configuracion de Facturas';

CREATE TABLE IF NOT EXISTS Pagos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    metodo_pago ENUM("efectivo","tarjeta","cuenta") DEFAULT "efectivo",
    efectivo_recibido DECIMAL(10,2) NOT NULL,
    vuelto_entregado DECIMAL(10,2) NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Pagos';

CREATE TABLE IF NOT EXISTS Facturas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    direccion_id INT NOT NULL,
    config_factura_id INT NOT NULL,
    num_factura VARCHAR(30) NOT NULL,
    fecha TIMESTAMP NOT NULL,
    exento DECIMAL(10,2),
    exonerado DECIMAL(10,2),
    total DECIMAL(10,2),
    pago_id INT,
    estado_pago BOOL NOT NULL,
    en_linea BOOL NOT NULL,
    envio_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios (id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (direccion_id) REFERENCES Direcciones(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (config_factura_id) REFERENCES Config_Facturas(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (pago_id) REFERENCES Pagos(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (envio_id) REFERENCES Envios(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Facturas';

CREATE TABLE Facturas_x_Producos (
    factura_id INT NOT NULL,
    producto_id INT NOT NULL,
    FOREIGN KEY (factura_id) REFERENCES Facturas(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Facturas y Productos';
