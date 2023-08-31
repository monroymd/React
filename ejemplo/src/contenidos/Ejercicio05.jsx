import React, { useEffect, useState, useRef } from 'react'
import Imagen2 from './Imagen.jsx'
import { obtenerApi } from '../servicio/Servicio'
import Foto2 from './Foto.jsx'

export default function Ejercicio05() {
    const [usuarios, setUsuarios] = useState([])
    const imgRef = useRef(null)

    useEffect(() => {
        obtenerApi().then(data =>
            setUsuarios(data))
    }, [])

    return (
        <>
            <h1>Ejercicio 5</h1>
            <Foto2 imgRef={imgRef} />
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">NickName</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => <Imagen2 key={usuario.id} usuario={usuario} imgRef={imgRef} />)}
                    </tbody>
                </table>

            </div>
        </>
    )
}
