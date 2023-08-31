import React, { useEffect, useState } from 'react'
import { obtenerApi } from '../servicio/Servicio'
import Usuario from './Usuario'

export default function Ejercicio03() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        obtenerApi().then(data =>
            setUsuarios(data))
    }, [])

    return (
        <div>
            <h1>Ejercicio 3</h1>
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
                    {usuarios.map(usuario => <Usuario key={usuario.id} usuario={usuario} />)}
                </tbody>
            </table>

        </div>
    )
}

