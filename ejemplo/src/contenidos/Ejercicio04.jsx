import React, { useEffect, useState } from 'react'
import Imagen from './Imagen.jsx'
import { obtenerImagen } from '../servicio/ServicioRYM'
import { obtenerApi } from '../servicio/Servicio'
import Foto from './Foto.jsx'


export default function Ejercicio04() {
    const [imagen, setImagenes] = useState([])

    useEffect(() => {
        obtenerImagen().then(data =>
            console.log(data))
    }, [])

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        obtenerApi().then(data =>
            setUsuarios(data))
    }, [])

    return (
        <>
            <div>
                <img id="foto" src={Foto} alt="" className='foto' />
            </div>
            <div>
                <table class="table">
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