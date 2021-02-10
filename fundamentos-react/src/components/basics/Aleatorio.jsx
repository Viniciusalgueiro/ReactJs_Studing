import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const min = props.min;
    const max = props.max;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo: </strong>{props.min}</p>
            <p><strong>Valor Mínimo: </strong>{props.max}</p>
            <p><strong>Valor Escolhido: </strong>{aleatorio}</p>
        </div>
    );
}
