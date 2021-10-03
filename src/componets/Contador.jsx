import React, {Fragment} from 'react'

const Contador = () => {
    
    const [counter, setCounter] = React.useState(0)

    const aumentar = () => setCounter(counter + 1)
    

    return (
        <Fragment>
            <p>Contador</p>
            <h3>Número aumentado { counter }</h3>
            <button onClick = {()=>aumentar()}>Aumentar</button>
        </Fragment>
    )
}

export default Contador
