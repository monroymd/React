import React, { useState } from 'react'

export default function Usuario({ usuario }) {



    return (

        <tr>
            <th scope="row">{usuario.id}</th>
            <td>{usuario.name}</td>
            <td>{usuario.username}</td>
            <td>{usuario.email}</td>
        </tr>

    )
}


