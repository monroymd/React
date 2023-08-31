import React, { useState, useEffect } from 'react'
import { obtenerImagen } from '../servicio/ServicioRYM'

export default function Usuario2({ usuario, imgRef }) {
    const [imagenLocal, setImagenLocal] = useState()

    useEffect(() => {
        obtenerImagen(usuario.id).then(data =>
            setImagenLocal(data.image))
    }, [mostrarImagen])

    function mostrarImagen() {
        if (imgRef.current) {
            imgRef.current.src = imagenLocal
        }
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
