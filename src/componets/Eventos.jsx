import React, { Fragment, useState } from 'react'

const Eventos = () => {

    const [texto, setText] = useState('Texto desde estado');

    const event = () => {
        setText('Cambiando el texto')
    }
    
    return (
        <Fragment>
            <hr />
            <h2>{ texto}</h2>
            <button onClick = {() => event()}>Click</button>
        </Fragment>
    )
}

export default Eventos
