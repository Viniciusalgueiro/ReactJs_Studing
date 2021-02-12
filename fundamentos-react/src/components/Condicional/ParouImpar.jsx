/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    const IsPar = props.numero % 2 === 0
    return (
        <div>
            {IsPar ?
                <span>Par</span> :
                <span>Ímpar</span>}
        </div>
    )
}