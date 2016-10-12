"use strict";

import AwesomeComponent from './AwesomeComponent.jsx';

var React = require('react');
var ReactDOM = require('react-dom');

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p> Hello React!</p>
                <AwesomeComponent />
            </div>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('app'));