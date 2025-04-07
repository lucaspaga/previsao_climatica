import React, { Component } from 'react'
import { Dropdown } from 'primereact/dropdown';



export default class Localizacao extends Component {


    render() {

        return (
            <div className="flex justify-content-center mb-3">
                <div className='px-3'>
                    <Dropdown
                        value={this.props.cidade}
                        onChange={(e) => this.props.onSelecionarCidade(e.value)}
                        options={this.props.cidades}
                        optionLabel="name"
                        placeholder="Selecione"
                    />
                </div>
            </div>
        )
    }
}
