import React, { Component } from 'react'
import { Card, Input, message } from 'antd';
import { connect } from 'react-redux'

import { nameUpdateAsyn } from '../../redux/actions';

const { Search } = Input;

class Username extends Component {

    onSearch = (value) => {
        if (value.trim()){
            this.props.nameUpdateAsyn(value)
        }else{
            message.error('用户名不能为空');
        }
    }

    render() {
        return (
            <div className="username">
                <Card title={<p>redux中用户名为：{<span className="redux-value">{this.props.username}</span>}</p>} style={{ width: 350 }}>
                    <Search placeholder="please input username" enterButton onSearch={this.onSearch} />
                </Card>
            </div>
        )
    }
}


export default connect(
    state => ({ username: state.name }),
    { nameUpdateAsyn }
)(Username)