import { crearAula } from "../actions"

export function AulaForm(){
    return (
        <form action={crearAula} className="border">
            <label className="border">
                Nombre
                <input name="nombre" className="border"></input>
            </label>
            <label className="border">
                Capacidad
                <input name="capacidad" className="border"></input>
            </label>
            <label className="border">
                Ubicación
                <input name="ubicacion" className="border"></input>
            </label>

            <button type="submit">Registrar aula</button>
        </form>
    )
}