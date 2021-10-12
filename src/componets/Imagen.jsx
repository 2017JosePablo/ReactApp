import React, { Fragment } from 'react'

const Imagen = ({url, alt}) => {
    return (
        <img 
            src={ url } 
            alt={ alt }
            className="flex-shrink-0 me-3 mt-3 rounded-circle" 
            style={
                {
                    width: '60px', 
                    height: '60px'
                }
            }
        />
    )
}

export default Imagen
