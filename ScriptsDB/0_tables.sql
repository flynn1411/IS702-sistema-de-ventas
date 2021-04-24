-- Creando Base de datos si no existe
DROP DATABASE IF EXISTS SistemaVentas;
CREATE DATABASE SistemaVentas CHARACTER SET utf8;
USE SistemaVentas;

CREATE TABLE Regiones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Regiones';

CREATE TABLE Paises (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    region_id INT NOT NULL,
    FOREIGN KEY (region_id) REFERENCES Regiones (id)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 COMMENT='Tabla de Paises';

CREATE TABLE Ciudades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    pais_id INT NOT NULL,
    region_id INT NOT NULL,
    FOREIGN KEY (pais_id) REFERENCES Paises(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (region_id) REFERENCES Regiones(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Ciudades';

CREATE TABLE Direcciones (
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

CREATE TABLE Roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rol VARCHAR(20) NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Roles';

CREATE TABLE Usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    primer_nombre VARCHAR(30),
    segundo_nombre VARCHAR(30),
    primer_apellido VARCHAR(30),
    segundo_apellido VARCHAR(30),
    correo VARCHAR(50),
    contrasena VARBINARY(100),
    num_telefono VARCHAR(30),
    direccion_id INT,
    rol INT NOT NULL,
    num_tarjeta VARBINARY(30),
    fecha_registro TIMESTAMP NOT NULL DEFAULT NOW(),
    UNIQUE KEY (correo),
    FOREIGN KEY (direccion_id) REFERENCES Direcciones(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (rol) REFERENCES Roles(id)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB AUTO_INCREMENT=1 COMMENT='Tabla de Usuarios';

CREATE TABLE Fabricantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Fabricantes';

CREATE TABLE Tipos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Tipos';

CREATE TABLE Proveedores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    num_telefono VARCHAR(30),
    direccion_id INT NOT NULL,
    UNIQUE (correo),
    FOREIGN KEY (direccion_id) REFERENCES Direcciones(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Proveedores';

CREATE TABLE Productos (
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


CREATE TABLE Ordenes_Compras(
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

CREATE TABLE Sucursales (
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

CREATE TABLE Tipos_Mov (
    id INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    movimiento SMALLINT NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Tipos de Movimientos';

CREATE TABLE Mov_Inventario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT NOT NULL,
    movimiento_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio DECIMAL(10,2),
    fecha_mov TIMESTAMP NOT NULL,
    FOREIGN KEY (movimiento_id) REFERENCES Tipos_Mov(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Movimientos de Invntarios';

CREATE TABLE Tipo_Impuestos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    porcentaje DECIMAL(10,2),
    activo BOOL NOT NULL,
    requerido BOOL NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Tipos de Tipo_Impuestos';

CREATE TABLE Inventario (
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

CREATE TABLE Paquetes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_paquete VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_paquete DATE NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Paquetes';

CREATE TABLE Productos_Paquetes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT,
    paquetes_id INT,
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (paquetes_id) REFERENCES Paquetes(id)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Paquetes de Productos';

CREATE TABLE Tipos_Docmentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Tipo de Documentos';

CREATE TABLE Envios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_empresas VARCHAR(50) NOT NULL,
    num_telefono VARCHAR(30) NOT NULL,
    correo VARCHAR(50)
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Envios';

CREATE TABLE Config_Facturas (
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

CREATE TABLE Pagos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    metodo_pago ENUM("efectivo","tarjeta","cuenta") DEFAULT "efectivo",
    efectivo_recibido DECIMAL(10,2) NOT NULL,
    vuelto_entregado DECIMAL(10,2) NOT NULL
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Pagos';

CREATE TABLE Facturas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    direccion_id INT NOT NULL,
    config_factura_id INT NOT NULL,
    num_factura VARCHAR(30),
    fecha TIMESTAMP NOT NULL DEFAULT NOW(),
    exento DECIMAL(10,2),
    exonerado DECIMAL(10,2),
    total DECIMAL(10,2),
    pago_id INT,
    estado_pago BOOL NOT NULL,
    en_linea BOOL NOT NULL,
    envio_id INT
) ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Facturas';

CREATE TABLE Facturas_x_Productos (
    factura_id INT NOT NULL,
    producto_id INT NOT NULL,
    FOREIGN KEY (factura_id) REFERENCES Facturas(id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
    ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB COLLATE=utf8_unicode_ci AUTO_INCREMENT =1 COMMENT='Tabla de Facturas y Productos';

