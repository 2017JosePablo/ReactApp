import React, { Fragment } from 'react'
import Imagen from './Imagen'

const Comentario = ({url, nombre, posted, comentario}) => {
    return (
        <div className="d-flex border p-3">
            <Imagen url={ url } alt={ nombre }/>
            <div>
                <h4>{ nombre } <small>Posted on { posted }</small></h4>
                <p>{ comentario }</p>
            </div>
        </div>
    )
}

export default Comentario
