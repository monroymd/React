export async function obtenerImagen(id) {
    const response = await fetch('https://rickandmortyapi.com/api/character/' + id)
    const data = await response.json()
    return data
}