import React, { Component } from 'react'
import { Dropdown } from 'primereact/dropdown';



export default class Localizacao extends Component {


    render() {

        return (
            <div className="flex align-items-center justify-content-center mb-3">
            <div className="px-3">
                <h2>Esolha uma capital :</h2>
            </div>
                <div className='px-3'>
                    <Dropdown
                         value={this.props.cidades.find(c => c.name === this.props.cidade) || null}
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
