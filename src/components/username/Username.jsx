import React, { Component } from 'react'
import { Card, Input } from 'antd';

const { Search } = Input;

export default class Username extends Component {
    render() {
        const username = "cc";

        return (
            <div className="username">
                <Card title={<p>redux中用户名为：{<span className="redux-value">{username}</span>}</p>} style={{ width: 350 }}>
                    <Search placeholder="please input username" enterButton />
                </Card>
            </div>
        )
    }
}
