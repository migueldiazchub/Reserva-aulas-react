CREATE DATABASE IF NOT EXISTS reserva_aulas;
use reserva_aulas;

CREATE TABLE IF NOT EXISTS aulas(
	id_aula INT PRIMARY KEY AUTO_INCREMENT,
    nombre TEXT,
    capacidad INT,
    ubicacion TEXT,
    recursos SET("proyector", "ordenadores", "pizarra digital", "altavoces", "laboratorio", "taller"),
    activa BOOLEAN
);

CREATE TABLE IF NOT EXISTS reservas(
	id_reserva INT PRIMARY KEY AUTO_INCREMENT,
    id_aula INT,
    solicitante TEXT,
    grupo TEXT,
    fecha DATE,
    hora_inicio TIME,
    hora_fin TIME,
    motivo TEXT,
    estado ENUM("pendiente", "confirmada", "cancelada"),
    CONSTRAINT fk_aula
    FOREIGN KEY (id_aula)
    REFERENCES aulas(id_aula)
);