import React, { Component } from 'react'
import { Card, Radio } from 'antd'
// 引用connect方法，将当前组件与 redux 关联起来
import { connect } from 'react-redux'

import { genderChange } from '../../redux/actions.js'

class Gender extends Component {

    // 改变单选按钮的值
    onChange = (e) => {
        let value = e.target.value;
        // 调用redux方法
        this.props.genderChange(value);
    }

    render() {
        // 获取 redux 状态
        const { gender } = this.props

        return (
            <div className="gender">
                <Card title={<p>redux中性别为：{<span className="redux-value">{gender}</span>}</p>} style={{ width: 350 }}>
                    <Radio.Group onChange={this.onChange} value={gender}>
                        <Radio value="男">男</Radio>
                        <Radio value="女">女</Radio>
                    </Radio.Group>
                </Card>
            </div>
        )
    }
}

export default connect(
    state => ({ gender: state.gender }),
    {
        genderChange
    }
)(Gender)

// 使用 connect 关联，将会把 state(状态) 和 action(方法) 注入到当前类的参数里面(props)
// 使用 this.props.xxx 就可以调用了

/**
export default connect(
    state => ({ gender: state.gender }), // 这里的 state.gender 中的 gender，对应的是redecers.js 中 function 的方法名
    // redux 会将所有的状态(reducer) 封装成一个对象，也就是我们所需要的对象了。其中函数名是键，state的值是值。
    {
        genderChange // 这里的话对应的就是action.js 中的方法了
    }
)(Gender)
 */