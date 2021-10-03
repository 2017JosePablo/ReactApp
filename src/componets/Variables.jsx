import React from 'react'

const Variables = () => {
    const saludo = 'Hola desde constante'
    const imagen = 'https://images.boardriders.com/globalGrey/quiksilver-products/all/default/hi-res/aqyss00004_ignite2mssspringsuit,v_xkks_frt1.jpg';
    return (
        <div>
            <b>Nuevo componente { saludo }</b>
            <img src={ imagen } alt="ALT" />
        </div>
    )
}

export default Variables
