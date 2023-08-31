import React, { useState } from 'react'
import Hijo from './Hijo'

const Main = () => {
    const [cambio, setCambio] = useState(0)
    const nombres = ["Mario", "Damian", "Pepito", "Juan", "Mike", "Otro Nombre"]

    function cambioDeNombre() {
        if (cambio == nombres.length - 1) {
            setCambio(0)
        } else {
            setCambio(cambio + 1)
        }
    }

    return (
        <div>
            <h1>Ejercicio 2</h1>
            <Hijo nombre={nombres[cambio]} />
            <button onClick={cambioDeNombre} >Cambiar nombre</button>
        </div>
    )
}

export default Main
