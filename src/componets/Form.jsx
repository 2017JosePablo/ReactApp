import React, { Fragment } from 'react'

const Form = () => {

    const [fruta, setFruta] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');


    return (
        <Fragment>
            <h2>Formulario</h2>
            <form>
                <input 
                    type="text" 
                    placeholder="Ingrese la fruta"
                    className="form-control mb-2"
                    onChange= { e => setFruta(e.target.value) }
                />
                <input 
                    type="text" 
                    placeholder="Ingrese la descripción"
                    className="form-control mb-2"
                    onChange= { e => setDescripcion(e.target.value) }
                />
                <button className="btn btn-primary btn-block">
                    Agregar
                </button>
            </form>
        </Fragment>
    )
}

export default Form
