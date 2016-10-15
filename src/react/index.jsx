"use strict";

import AwesomeComponent from './AwesomeComponent.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';
//import {TextInput} from 'belle';
import OneOption from './Question/OneOption.jsx';
import MultiOption from './Question/MultiOption.jsx';
import PlainAnswer from './Question/PlainAnswer.jsx';
import Modalis from './Question/Modalis.jsx';
import { Button, Panel, PageHeader } from 'react-bootstrap';




// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var React = require('react');
var ReactDOM = require('react-dom');

const title = (
    <h2>Deval</h2>
);

class App extends React.Component {
    render() {
        return (

        <div>
            <Panel bsStyle="info">
                <PageHeader>JSX</PageHeader>
                <OneOption question="What is JSX"/>
                <PlainAnswer question="React DOM property name for 'class' attribute"/>
                <MultiOption question="Select statement that is true for JSX"/>
                <Modalis/>
            </Panel>
        </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
