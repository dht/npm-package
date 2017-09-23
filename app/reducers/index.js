import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'

import appState from './appState'

const reduxApp = combineReducers({
    appState,
    routing: routerReducer,
})

export default reduxApp




