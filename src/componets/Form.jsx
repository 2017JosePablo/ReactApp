import React, { Fragment } from 'react'

const Form = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [productos, setProducto] = React.useState([]); 

    const save = e => {
        e.preventDefault();
        if(!fruta.trim()){
            console.log('Fruta vacia')
            return;
        }
        if(!descripcion.trim()){
            console.log('Descripcion vacia')
            return;
        }
        e.target.reset()
        setProducto([
            ...productos,
            {
                fruta: fruta,
                descripcion: descripcion
            }
        ])
        setFruta('')
        setDescripcion('')
    }

    return (
        <Fragment>
            <h2>Formulario</h2>
            <form onSubmit={ save } >
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
                <button className="btn btn-primary btn-block" type="submit">
                    Agregar
                </button>
            </form>
            <hr />
            <table className="table">
                <thead>
                    <td>ID</td>
                    <td>Nombre</td>
                    <td>Descripcion</td>
                </thead>
                <tbody>
                    {
                        
                        productos.length == 0 ? 
                        <tr>
                            <td colspan="3" className="text-center">No se encontrado ningún registro</td>
                        </tr> : productos.map((p, index) => (
                            <tr>
                                <td>{ index + 1 }</td>
                                <td>{ p.fruta }</td>
                                <td>{ p.descripcion }</td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </Fragment>
    )
}

export default Form