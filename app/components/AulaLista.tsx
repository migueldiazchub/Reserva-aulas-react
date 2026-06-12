import { selectAulas } from "@/lib/aulas"

export async function AulaLista(){
    const aulas = await selectAulas()

    return (
        <section>
                {aulas.length === 0 ? (
              <p>Todavía no hay aulas.</p>
            ) : (
              <ul>
                {aulas.map((aula) => (
                  <li key={aula.id}>
                    <p>{aula.nombre}</p>
                    <p>{aula.capacidad}</p>
                    <p>{aula.ubicacion}</p>
                    <p>{(aula.recursos === null ? "Sin recursos" : aula.recursos)}</p>
                    <p>{aula.activa ? "Activa" : "Inactiva"}</p>
                  </li>
                ))}
              </ul>
            )}
        </section>
    )
}