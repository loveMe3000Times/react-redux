<!--
	蓝蓝的字体：<font color="#428bca" size=3></font>
	绿油油的字体： <font color="#228B22" size=5></font>
	粉粉的字体： <font color="#d9534f" size=3></font>
	用来扯淡的字体： <font color="#aaa" size=2>ps</font>
	刮奖字体： <font color="#fff" size=4></font>
-->

@[toc]

# 在react中使用redux(多个reducer)
***************

### 需求概括
<font color="#aaa" size=2>这里就是用来说明一下redux的使用，所以随便举了个例子</font>
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201123025800668.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NjX0tpbmc=,size_16,color_FFFFFF,t_70#pic_center)


### 一、下载redux依赖包
`cnpm i redux react-redux redux-thunk -S`

### 二、构建redux目录
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201123025854497.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NjX0tpbmc=,size_16,color_FFFFFF,t_70#pic_center)

*****************


### 三、创建一个action(redux)

##### 3.1 创建 redux 核心 store对象 (store.js)

```javasscript
// createStore: 生成store对象， applyMiddleware: 使redux支持异步更行，需要配合 redux-thunk 使用
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
```
<font color="#aaa" size=2>该操作一个工程只需要执行一次就好了。后面的几步每创建一个新的更新操作都需要重新弄一遍。。。</font>

##### 3.2 创建 action-types (action-types.js)

<font color="#aaa" size=2>为什么选择这个当一步呢我？主要是为了明确目标，你们想从哪一个开始弄起都可以</font>

```javascript
// 修改性别 
export const GENDERCHANGE = "GENDERCHANGE"
```
<font color="#aaa" size=2>使用一个单独的文件来管理action type， 主要的好处就是方便后期的管理与开发，action type 越多，使用起来就约轻便、安全</font>

##### 3.3 创建reducer (reducers.js)

```javascript
// 这个方法的作用就是用来整合所有的reducer
import { combineReducers } from 'redux'

import { GENDERCHANGE } from './action-types'

// 修改性别
function gender(state = "男", action) {
    switch (action.type) {
        case GENDERCHANGE: return action.data;
        default: return state;
    }
}

export default combineReducers({ gender })
// 这里的话，每加一个reducer，也就是添加一个function，将新的这个function解构在combineReducers包裹的对象中就完事儿了
// 如果还不清楚出就看附上的git链接了。
```

##### 3.4 创建 action (actions.js)

```javascript
import { GENDERCHANGE } from './action-types.js';

// 修改性别
export const genderChange = (data) => ({ type: GENDERCHANGE, data });
```

### 四、使用 redux

##### 4.1 使用 Provider 包裹最外层组件

<font color="#aaa" size=2>我这里最外层组件是 index.js</font>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import store from './redux/store';

ReactDOM.render(
  // 这里使用 Provider 包裹最外层组件
  // 同时将我们生成的 store 作为 Provider 参数
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

##### 4.2 组件使用

<font color="#aaa" size=2>终于到了。。。</font>
<font color="#aaa" size=2>以Gender.jsx 组件为栗子</font>

```javascript
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
```
<font color="#d9534f" size=3>这里对于connect的使用我想单独解释一下</font>
```javascript
export default connect(
    state => ({ gender: state.gender }), // 这里的 state.gender 中的 gender，对应的是redecers.js 中 function 的方法名
    // redux 会将所有的状态(reducer) 封装成一个对象，也就是我们所需要的对象了。其中函数名是键，state的值是值。
    {
        genderChange // 这里的话对应的就是action.js 中的方法了
    }
)(Gender)
```

### 线上地址 [git仓库](https://github.com/loveMe3000Times/react-redux.git)