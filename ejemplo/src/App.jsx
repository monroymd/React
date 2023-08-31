import React, { useState } from 'react'

const Contar = () => {
  const [contador, setContador] = useState(0)

  const Num = () => {
    setContador(contador + 1)
  }

  return (
    <button type="button" className="btn btn-warning" onClick={Num}>Contador = {contador}</button>

  )
}

export default Contar

