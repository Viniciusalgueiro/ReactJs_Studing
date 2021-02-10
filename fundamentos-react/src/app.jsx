import React from 'react'

import Aleatorio from './components/basics/Aleatorio'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fraguimentos from './components/basics/Fraguimentos'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div id='app'>
        <h1>Fundamentos React </h1>
        <Aleatorio min={1} max={60} />
        <Fraguimentos />
        <ComParametro
            titulo="Segundo Componente"
            aluno="vinicius Aquino"
            nota='5.3' />
        <Primeiro />
    </div>
)

