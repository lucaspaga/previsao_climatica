import React, { Component } from 'react'

import { Card } from 'primereact/card';

export default class card extends Component {
    render() {
        return (
            <div className="flex justify-content-center">
                <Card title="Advanced Card" subTitle="Card subtitle" footer="oi" header="oi" className="md:w-25rem">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
            </div>
        )
    }
}
