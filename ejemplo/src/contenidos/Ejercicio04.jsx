import React, { useEffect, useState } from 'react'
import Imagen from './Imagen.jsx'
import { obtenerApi } from '../servicio/Servicio'
import Foto from './Foto.jsx'


export default function Ejercicio04() {


    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        obtenerApi().then(data =>
            setUsuarios(data))
    }, [])

    return (
        <>
            <h1>Ejercicio 4</h1>
            <Foto />
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
                        {usuarios.map(usuario => <Imagen key={usuario.id} usuario={usuario} />)}
                    </tbody>
                </table>

            </div>
        </>
    )
}