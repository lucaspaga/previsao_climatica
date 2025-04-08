import React, { Component } from 'react'

import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default class card extends Component {
    render() {
        return (
            <div className="flex justify-content-center">
                <Card title="Previsão Climática" subTitle={this.props.cidade} footer="" className="border-round w-100">
                    <Splitter style={{ height: '300px' }}>
                        <SplitterPanel className="flex align-items-top justify-content-center" size={40} minSize={10}>
                            <div style={{ width: '100%', height: '100%' }}>
                                <img
                                    src={this.props.bandeira}
                                    alt="Imagem do Clima"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center justify-content-center" size={60}>

                            <DataTable
                                value={this.props.informacoes}
                                style={{ width: '100%', height: '100%', objectFit: 'cover'  }}
                                scrollable
                                scrollHeight="100%">
                                <Column field="parametro" header="Parâmetro" />
                                <Column field="valor" header="Valor" />
                            </DataTable>

                        </SplitterPanel>
                    </Splitter>

                </Card>
            </div>
        )
    }
}
