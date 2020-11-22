import React, { Component } from 'react'
import { Card, InputNumber, Button } from 'antd';


export default class Num extends Component {
    render() {
        const num = 8;

        return (
            <div className="num">
                <Card title={<p>redux中的数字为：{<span className="redux-value">{num}</span>}</p>} style={{ width: 350 }}>
                    <InputNumber min={1} defaultValue={1} />
                    <Button type="primary">Increase</Button>
                    <Button type="primary">Decrease</Button>
                </Card>
            </div>
        )
    }
}
