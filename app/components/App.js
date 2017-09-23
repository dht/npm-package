import React from 'react';
import Simple from '../../src/Simple';

import './App.scss';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (<div style={ styles.container }>
               <Simple />
            </div>
        );
    }
}

const styles = {
    container: {
        position: 'fixed',
        top: '50px',
        left: '50px',
        right: '50px',
        bottom: '50px',
        border:'1px solid gray',
    }
}