// createStore: 生成store对象， applyMiddleware: 使redux支持异步更行，需要配合 redux-thunk 使用
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;