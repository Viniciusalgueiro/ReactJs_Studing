import ReactDOM from  'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'

ReactDOM.render(
    <div id='app'>
        <Primeiro></Primeiro>
        <ComParametro titulo="Segundo Componente"
        aluno="vinicius Aquino"
        nota='5.3'/>
    </div>,
    document.getElementById('root')
)