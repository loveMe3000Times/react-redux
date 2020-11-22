import React, { Component } from 'react'
import { Card, InputNumber, Button } from 'antd';
import { connect } from 'react-redux'

import { numIncrease, numDncrease } from '../../redux/actions'

class Num extends Component {
    num = 1;

    handleIncrease = () => {
        this.props.numIncrease(this.num)
    }

    handleDecrease = () => {
        this.props.numDncrease(this.num)
    }
    
    numChange = (value) => {
        this.num = value
    }

    render() {
        return (
            <div className="num">
                <Card title={<p>redux中的数字为：{<span className="redux-value">{this.props.num}</span>}</p>} style={{ width: 350 }}>
                    <InputNumber min={1} defaultValue={1} onChange={this.numChange} />
                    <Button type="primary" onClick={this.handleIncrease}>Increase</Button>
                    <Button type="primary" onClick={this.handleDecrease}>Decrease</Button>
                </Card>
            </div>
        )
    }
}

export default connect(
    state => ({ num: state.num }),
    { numIncrease, numDncrease }
)(Num)