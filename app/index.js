import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import store from './store';

import App from './components/AppContainer'

let rootElement;

const onEnter = () => {
};

const renderStore = () => {
	rootElement = document.getElementById('root')

	render(
		<div className="root">
				<Provider store={store}>
					<Router history={ hashHistory }
							routes={[{path: '/', component: App, onEnter: onEnter}]}/>
				</Provider>
			</div>
		,
		rootElement
	);
}

renderStore();
