import React, { Component } from 'react'
import axios from 'axios';

import Card from './components/card';
import Localizacao from './components/Localizacao';


const estacoes = {
  VERAO: {
    icone: "sun",
    nome: "Verão"
  },

  INVERNO: {
    icone: "snowman",
    nome: "Inverno"
  },

  OUTONO: {
    icone: "leaf",
    nome: "Outono"
  },

  PRIMAVERA: {
    icone: "fan",
    nome: "Primavera"
  }


}

const appId = 'f2aabbd823eccef2adabc7ce9cfa1ff8'






export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          codigoUF : null,
          cidade : null,
          cidades: [
            { name: 'Rio Branco', code: 'AC' },
            { name: 'Maceió', code: 'AL' },
            { name: 'Macapá', code: 'AP' },
            { name: 'Manaus', code: 'AM' },
            { name: 'Salvador', code: 'BA' },
            { name: 'Fortaleza', code: 'CE' },
            { name: 'Brasília', code: 'DF' },
            { name: 'Vitória', code: 'ES' },
            { name: 'Goiânia', code: 'GO' },
            { name: 'São Luís', code: 'MA' },
            { name: 'Cuiabá', code: 'MT' },
            { name: 'Campo Grande', code: 'MS' },
            { name: 'Belo Horizonte', code: 'MG' },
            { name: 'Belém', code: 'PA' },
            { name: 'João Pessoa', code: 'PB' },
            { name: 'Curitiba', code: 'PR' },
            { name: 'Recife', code: 'PE' },
            { name: 'Teresina', code: 'PI' },
            { name: 'Rio de Janeiro', code: 'RJ' },
            { name: 'Natal', code: 'RN' },
            { name: 'Porto Alegre', code: 'RS' },
            { name: 'Porto Velho', code: 'RO' },
            { name: 'Boa Vista', code: 'RR' },
            { name: 'Florianópolis', code: 'SC' },
            { name: 'São Paulo', code: 'SP' },
            { name: 'Aracaju', code: 'SE' },
            { name: 'Palmas', code: 'TO' }
          ],
          codigoPais : 'BR',
          baseURL : 'api.openweathermap.org/geo/1.0/direct',
          url : null
          
        };
      }

      definirURL = () => {
        this.setState({
          url : `http://${baseURL}?q=${cidade},${codigoUF},${codigoPais}&appid=${appId}`
        })
      }

      componentDidUpdate(){
        console.log(this.state.cidade)
        console.log(this.state.codigoUF)
      }



render() {
  return (
    <div className="container mt-2 text-center">
      <div className="row justify-content-center">
        <div className="col-12">
          <Localizacao
            cidade = {this.state.cidade}
            cidades = {this.state.cidades}
            onSelecionarCidade={(novaCidade) => {
              this.setState({ cidade: novaCidade.name })
              this.setState({codigoUF: novaCidade.code})}}
            onSelecionarPais={(novoPais) => this.setState({ pais: novoPais })}/>
          <Card />
        </div>
      </div>
    </div>


  )
}
}
