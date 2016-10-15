import React from 'react';
import { Panel } from 'react-bootstrap';

const title = (
    <h3>Deval</h3>
);

const panelsInstance = (
    <div id="centerPanel">
        <Panel header={title}>
            Panel content
        </Panel>
    </div>
);

class PanelCenter extends React.Component {
    render() {
        return (
            panelsInstance
        )
    }
}

export default PanelCenter;