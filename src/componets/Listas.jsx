import React from 'react'

const Listas = () => {
    const initState = [
        {
            id: 1,
            texto: 'tarea 1'
        }
    ];

    const [counter, setCounter] = React.useState( initState.length);

    const [list, setList] = React.useState(initState)

    const agregar = () => {
        let id = counter + 1
        setList([
            ...list,
            {
                id: id,
                texto: `tarea ${id}`
            }
            
        ])
        setCounter( id)
    }

    return (
        <div>
            <h2>Listas</h2>
            {
                list.map((item, index) => (
                <h4 key={index}>{ item.texto }</h4>
                ))
            }
            <button onClick={ () => agregar()}>Agregar</button>
        </div>
    )
}

export default Listas
