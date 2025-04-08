import React, { Component } from 'react'
import axios from 'axios';

import Card from './components/card';
import Localizacao from './components/Localizacao';



const appId = 'f2aabbd823eccef2adabc7ce9cfa1ff8'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      codigoUF: null,
      cidade: null,
      cidades: [
        {
          "name": "Rio Branco",
          "code": "AC",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bandeira_de_Rio_Branco.svg/1200px-Bandeira_de_Rio_Branco.svg.png"
        },
        {
          "name": "Maceió",
          "code": "AL",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bandeira_de_Macei%C3%B3.svg/1200px-Bandeira_de_Macei%C3%B3.svg.png"
        },
        {
          "name": "Macapá",
          "code": "AP",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Bandeira_de_Macap%C3%A1.svg/2560px-Bandeira_de_Macap%C3%A1.svg.png"
        },
        {
          "name": "Manaus",
          "code": "AM",
          "img": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Bandeira_do_Munic%C3%ADpio_de_Manaus.svg"
        },
        {
          "name": "Salvador",
          "code": "BA",
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbBvJdncfHfA2ui11mTJWYzUf6QThC4BkcQ&s"
        },
        {
          "name": "Fortaleza",
          "code": "CE",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Bandeira_de_Fortaleza.svg/1200px-Bandeira_de_Fortaleza.svg.png"
        },
        {
          "name": "Brasília",
          "code": "DF",
          "img": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg"
        },
        {
          "name": "Vitória",
          "code": "ES",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bandeira_de_Vit%C3%B3ria.svg/1200px-Bandeira_de_Vit%C3%B3ria.svg.png"
        },
        {
          "name": "Goiânia",
          "code": "GO",
          "img": "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Goi%C3%A2nia.svg"
        },
        {
          "name": "São Luís",
          "code": "MA",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bandeira_de_S%C3%A3o_Lu%C3%ADs.svg/1200px-Bandeira_de_S%C3%A3o_Lu%C3%ADs.svg.png"
        },
        {
          "name": "Cuiabá",
          "code": "MT",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandeira_de_Cuiab%C3%A1.svg/1200px-Bandeira_de_Cuiab%C3%A1.svg.png"
        },
        {
          "name": "Campo Grande",
          "code": "MS",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bandeira_de_Campo_Grande.svg/1200px-Bandeira_de_Campo_Grande.svg.png"
        },
        {
          "name": "Belo Horizonte",
          "code": "MG",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bandeira-de-Belo-Horizonte.svg/1200px-Bandeira-de-Belo-Horizonte.svg.png"
        },
        {
          "name": "Belém",
          "code": "PA",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bandeira_de_Bel%C3%A9m.svg/1200px-Bandeira_de_Bel%C3%A9m.svg.png"
        },
        {
          "name": "João Pessoa",
          "code": "PB",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bandeira_de_Jo%C3%A3o_Pessoa.svg/1200px-Bandeira_de_Jo%C3%A3o_Pessoa.svg.png"
        },
        {
          "name": "Curitiba",
          "code": "PR",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bandeira_de_Curitiba.svg/1200px-Bandeira_de_Curitiba.svg.png"
        },
        {
          "name": "Recife",
          "code": "PE",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bandeira_de_Recife.svg/1200px-Bandeira_de_Recife.svg.png"
        },
        {
          "name": "Teresina",
          "code": "PI",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bandeira_de_Teresina.svg/1200px-Bandeira_de_Teresina.svg.png"
        },
        {
          "name": "Rio de Janeiro",
          "code": "RJ",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg/1200px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png"
        },
        {
          "name": "Natal",
          "code": "RN",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bandeira_de_Natal.svg/1200px-Bandeira_de_Natal.svg.png"
        },
        {
          "name": "Porto Alegre",
          "code": "RS",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/27/Bandeira_de_Porto_Alegre.svg"
        },
        {
          "name": "Porto Velho",
          "code": "RO",
          "img": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_de_Porto_Velho.svg"
        },
        {
          "name": "Boa Vista",
          "code": "RR",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Bandeira_de_Boa_Vista.svg/1200px-Bandeira_de_Boa_Vista.svg.png"
        },
        {
          "name": "Florianópolis",
          "code": "SC",
          "img": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Bandeira_de_Florian%C3%B3polis.svg"
        },
        {
          "name": "São Paulo",
          "code": "SP",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg/1200px-Bandeira_do_estado_de_S%C3%A3o_Paulo.svg.png"
        },
        {
          "name": "Aracaju",
          "code": "SE",
          "img": "https://upload.wikimedia.org/wikipedia/commons/7/70/Bandeira_de_Aracaju.svg"
        },
        {
          "name": "Palmas",
          "code": "TO",
          "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bandeira_de_Palmas.svg/1200px-Bandeira_de_Palmas.svg.png"
        }
      ],

      codigoPais: 'BR',
      baseURL: 'api.openweathermap.org/geo/1.0/direct',
      url: null,
      mensagemDeErro: null,
      url_previsao: null,
      informacoes: null,
      bandeira: null
    };
  }

  definirURL = () => {
    this.setState({
      url: `http://${this.state.baseURL}?q=${this.state.cidade},${this.state.codigoUF},${this.state.codigoPais}&appid=${appId}`
    })
  }

  obterCoordenadas = () => {
    axios.get(this.state.url)
      .then((res) => {
        const { lat, lon } = res.data[0]
        const novaURLPrevisao = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&lang=pt_br`;
        this.setState({ url_previsao: novaURLPrevisao }, () => {
          this.obterPrevisao();
        })

      })
      .catch((err) => {
        this.setState({
          mensagemDeErro: err
        })
      });
  }

  traduzirCampos = (dados) => {
    return [
      { parametro: 'Temperatura', valor: `${(dados.temp - 273.15).toFixed(1)} °C` },
      { parametro: 'Sensação Térmica', valor: `${(dados.feels_like - 273.15).toFixed(1)} °C` },
      { parametro: 'Temp. Mínima', valor: `${(dados.temp_min - 273.15).toFixed(1)} °C` },
      { parametro: 'Temp. Máxima', valor: `${(dados.temp_max - 273.15).toFixed(1)} °C` },
      { parametro: 'Pressão Atmosférica', valor: `${dados.pressure} hPa` },
      { parametro: 'Umidade', valor: `${dados.humidity}%` }
    ];
  };

  obterPrevisao = () => {
    axios.get(this.state.url_previsao)
      .then((res) => {
        const informacoesTraduzidas = this.traduzirCampos(res.data.main);
        this.setState({ informacoes: informacoesTraduzidas });
      })
      .catch((err) => {
        this.setState({
          mensagemDeErro: err
        })
      });
  }

  obterImagemPorNome = (nomeCidade) => {
    const cidade = this.state.cidades.find(c => c.name === nomeCidade);
    this.setState({
      bandeira: cidade.img
    })

  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.cidade !== this.state.cidade ||
      prevState.codigoUF !== this.state.codigoUF
    ) {
      const novaURL = `https://${this.state.baseURL}?q=${this.state.cidade},${this.state.codigoUF},${this.state.codigoPais}&appid=${appId}`;

      this.setState({ url: novaURL }, () => {
        // Só chama depois que a URL foi realmente definida
        this.obterCoordenadas();
      });

      this.obterImagemPorNome(this.state.cidade);

    }



    console.log(this.state.url_previsao)
    console.log(this.state.informacoes)
    console.log(this.state.bandeira)
  }





  render() {
    return (
      <div className="flex justify-content-center align-items-center min-h-screen"
      style={{ backgroundImage: "url(https://sustentabilidadebrasil.com/wp-content/uploads/2024/08/pexels-brett-sayles-1431822-scaled.jpg)", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="container mt-2 text-center">
          <div className="flex align-items-center justify-content-center">
            <div className="row justify-content-center">
              <div className="col-12"
              style={{ backgroundColor: "white" }}>
                <Localizacao
                  cidade={this.state.cidade}
                  cidades={this.state.cidades}
                  onSelecionarCidade={(novaCidade) => {
                    this.setState({ cidade: novaCidade.name })
                    this.setState({ codigoUF: novaCidade.code })
                  }}
                  onSelecionarPais={(novoPais) => this.setState({ pais: novoPais })} />
                {this.state.cidade ?
                  <Card
                    bandeira={this.state.bandeira}
                    cidade={this.state.cidade}
                    informacoes={this.state.informacoes} />

                  :
                  <div>
                    <i className="pi pi-spin pi-spinner mb-3" style={{ fontSize: '2rem', color : 'blue'}}></i>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
