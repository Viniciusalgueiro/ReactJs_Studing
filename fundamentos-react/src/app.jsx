import React from 'react'

import Aleatorio from './components/basics/Aleatorio'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fraguimentos from './components/basics/Fraguimentos'
import Card from './components/layout/card'
import Familia from './components/basics/familia'
import ListaAlunos from './components/Repeticao/ListaAlunos'
import FamiliaMembro from './components/basics/FamiliaMembro'
import './App.css'
import ListaProduto from './components/Repeticao/ListaProduto'
import ParouImpar from './components/Condicional/ParouImpar'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className='App'>
        <h1>Fundamentos React </h1>
        <div className="Cards">
            <Card titulo="#09 - Renderização Condicional " color='#FFAC00' >
                <ParouImpar numero={20} ></ParouImpar>
            </Card>
            <Card titulo="#07 - Lista de Produtos" color='#29ABA4'>
                <ListaProduto />
            </Card>
            <Card titulo="#06 - Lista Alunos" color='#53BBF4 '>
                <ListaAlunos />
            </Card>
            <Card titulo="#05 - Componente com Filhos" color='#F0A830'>
                <Familia sobrenome='Silva'>
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatorio" color='#FA6900'>
                <Aleatorio min={1} max={120} />
            </Card>
            <Card titulo="#03 - Fragmentos" color='#E94C6F'>
                <Fraguimentos />
            </Card>
            <Card titulo="#02 - ComParametro" color='#E8B71A'>
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

