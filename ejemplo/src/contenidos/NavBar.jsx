import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"><use xlink: href="#bootstrap"></use></svg>
                    <span class="fs-4">NavBar</span>
                </Link>

                <ul class="nav nav-pills">
                    <li class="nav-item"><Link to="/" class="nav-link active" aria-current="page">Home</Link></li>
                    <li class="nav-item"><Link to="ejercicio01" class="nav-link">Ejercicio 1</Link></li>
                    <li class="nav-item"><Link to="ejercicio02" class="nav-link">Ejercicio 2</Link></li>
                    <li class="nav-item"><Link to="ejercicio03" class="nav-link">Ejercicio 3</Link></li>
                    <li class="nav-item"><Link to="ejercicio04" class="nav-link">Ejercicio 4</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default NavBar
