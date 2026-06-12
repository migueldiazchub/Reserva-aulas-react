import { abrirConexion } from "./db";

export type Aula = {
    id: number
    nombre: string
    capacidad: number
    ubicacion: string
    recursos: string[]
    activa: boolean  
}

export async function selectAulas(){
    const conexion = await abrirConexion()

    try {
        const [tuplas] = await conexion.execute(
            "SELECT * FROM aulas ORDER BY nombre"
        )

        return tuplas as Aula[]
    } finally {
        await conexion.end()
    }
}

// nombre: string
    // capacidad: number
    // ubicacion: string
    // recursos: string[]
    // activa: boolean

export async function insertAulas(nombre: string, capacidad: number, ubicacion: string){
    const conexion = await abrirConexion()

    try {
        await conexion.execute(
            "INSERT INTO aulas (nombre, capacidad, ubicacion, activa) VALUES (?, ?, ?, false)",
            [nombre, capacidad, ubicacion]
        )
    } finally {
        await conexion.end()
    }
}