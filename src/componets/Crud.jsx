import React, { Fragment, useState } from 'react'
import shortid from 'shortid'

const Crud = () => {

    const [tarea, setTarea] = useState('')
    const [tareas, setTareas] = useState([])
    const [modoEdit, setModoEdit] = useState(false)
    const [id, setID] = useState('')
    const [error, setError] = useState(null)

    const add = (e) => {
        e.preventDefault()
        if(!tarea.trim()){
            setError('Campo requerido')
            return
        }
        setTareas([
            ...tareas,
            {
                id: shortid.generate(),
                tarea
            }
        ])
        setTarea('')
        setError(null)
    }

    const edit = e => {
        e.preventDefault()
        if(!tarea.trim()){
            setError('Campo requerido')
            return
        }
        setTareas(
            tareas.map(item => item.id === id ? 
                {
                    id,
                    tarea
                } : 
                item
            )
        )
        cancelarModEdit()
    }

    const cancelarModEdit = () => {
        setTarea('')
        setModoEdit(false)
        setID('')
        setError(null)
    }

    const eliminar = id => {
        setTareas(tareas.filter(t => t.id !== id))
    }

    const setEditar = item => {
        setModoEdit(true)
        setTarea(item.tarea)
        setID(item.id)
    }

    return (
        <Fragment>
            <hr />
            <h1 className="text-center">CRUD SIMPLE</h1>
            <div className="row">
                <div className="col-8">
                    <h4 className="text-center">Lista de tareas</h4>
                    <ul className="list-group">
                        {
                            tareas.length === 0 ? (
                                <li className="list-group-item">No hay tareas</li>
                            ) : (
                                tareas.map(t => (
                                    <li className="list-group-item" key={ t.id }>
                                        <span className="lead">{ t.tarea }</span>
                                        <button 
                                            className="btn btn-danger btn-sm float-end mx-2" 
                                            onClick={ () => eliminar(t.id) }
                                        >
                                            Eliminar
                                        </button>
                                        <button 
                                            className="btn btn-warning btn-sm float-end"
                                            onClick= { () => setEditar(t) }
                                        >
                                            Editar
                                        </button>
                                    </li>
                                ))
                            )
                        }
                        
                    </ul>
                </div>
                <div className="col-4">
                    <h4 className="text-center">
                        {
                            modoEdit ? 'Editar tarea' : 'Agregar tarea'
                        }
                    </h4>
                    <form onSubmit={ modoEdit ? edit : add }>
                        {
                            error ? <span className="text-danger">{ error }</span> : null
                        }
                        <input 
                            type="text" 
                            className="form-control mb-2" 
                            placeholder="Ingrese la tarea"
                            onChange={ (e) => setTarea(e.target.value) }
                            value={ tarea }
                        />
                        <div className="d-grid gap-2">
                            {
                                modoEdit ? (
                                    <Fragment>
                                        <button className="btn btn-warning btn-block" type="submit">
                                            Editar
                                        </button>
                                        <button className="btn btn-dark btn-block" type="button" onClick = { () => cancelarModEdit() }>
                                            Cancelar
                                        </button>
                                    </Fragment>
                                ) : (
                                    <button className="btn btn-dark btn-block" type="submit">
                                        Agregar
                                    </button>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Crud
