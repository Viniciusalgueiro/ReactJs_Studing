import React from 'react'

import Aleatorio from './components/basics/Aleatorio'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fraguimentos from './components/basics/Fraguimentos'
import Card from './components/layout/card'
import './App.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className='App'>
        <h1>Fundamentos React </h1>
        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatorio"  color='#FA6900'>
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmentos" color='#E94C6F'>
                <Fraguimentos />
            </Card>
            <Card titulo="#02 - ComParametro"  color='#E8B71A'> 
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="vinicius Aquino"
                    nota='5.3' />
            </Card>
            <Card titulo="#01 - Primeiro" color='#1FDA9A'>
                <Primeiro />
            </Card>
        </div>
    </div>
)

