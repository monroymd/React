import React, { useState } from 'react'

const Contar = () => {
    const [contador, setContador] = useState(0)

    const Num = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <h1>Ejercicio 1</h1>
            <button type="button" className="btn btn-warning" onClick={Num}>Contador = {contador}</button>
        </>
    )
}

export default Contar