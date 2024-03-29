import React, { useState, useEffect } from 'react'
import { obtenerImagen } from '../servicio/ServicioRYM'

export default function Usuario({ usuario }) {
    const [imagenLocal, setImagenLocal] = useState()

    useEffect(() => {
        obtenerImagen(usuario.id).then(data =>
            setImagenLocal(data.image))
    }, [mostrarImagen])

    function mostrarImagen() {
        let foto = document.getElementById("foto")
        foto.src = imagenLocal
    }

    return (
        <>

            <tr>

                <th scope="row">{usuario.id}</th>
                <td onMouseOver={mostrarImagen} >
                    {usuario.name}

                </td>
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
            </tr>
        </>
    )
}