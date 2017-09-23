import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import store from './store';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/AppContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

let rootElement;

const onEnter = () => {
}

const renderStore = () => {
	rootElement = document.getElementById('root')

	render(
		<MuiThemeProvider>
		<div className="root">
				<Provider store={store}>
					<Router history={ hashHistory }
							routes={[{path: '/', component: App, onEnter: onEnter}]}/>
				</Provider>
			</div>
			</MuiThemeProvider>
		,
		rootElement
	);
}

renderStore();
