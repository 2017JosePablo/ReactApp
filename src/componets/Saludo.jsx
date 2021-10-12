import React from 'react'

const Saludo = (props) => {
    return (
        <div>
            <h2>Hola { props.persona }</h2>
            <p>Edad: { props.edad } años</p>
        </div>
    )
}

export default Saludo
