import React from 'react';
import './Simple.scss';

export default class Simple extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentDidMount() {
    }


    render() {
        const {} = this.state;

        return (
            <div className="Simple-container">
                Simple
            </div>
        );
    }
}
