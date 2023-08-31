import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <span className="fs-4">NavBar</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to="ejercicio01" className="nav-link">Ejercicio 1</Link></li>
                    <li className="nav-item"><Link to="ejercicio02" className="nav-link">Ejercicio 2</Link></li>
                    <li className="nav-item"><Link to="ejercicio03" className="nav-link">Ejercicio 3</Link></li>
                    <li className="nav-item"><Link to="ejercicio04" className="nav-link">Ejercicio 4</Link></li>
                    <li className="nav-item"><Link to="ejercicio05" className="nav-link">Ejercicio 5</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default NavBar
