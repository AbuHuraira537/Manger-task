import {createStore} from 'redux'

import reducer from './TaskReducer'

const store=createStore(reducer)

export default store