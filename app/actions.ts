"use server"

import { revalidatePath } from "next/cache"
import { insertAulas } from "@/lib/aulas"

export async function crearAula(formData: FormData){
    const nombre = formData.get("nombre") as string
    const capacidad = formData.get("capacidad") as unknown as number
    const ubicacion = formData.get("ubicacion") as string

    if (nombre.trim() === "" || ubicacion.trim() === ""){
        return
    }

    if(capacidad <= 0){
        return
    }

    await insertAulas(nombre.trim(), capacidad, ubicacion.trim())

    revalidatePath("/")
}