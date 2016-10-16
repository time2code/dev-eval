"use strict";

import React from 'react';
import { Modal,Button  } from 'react-bootstrap';


class Modalis extends React.Component {

    constructor() {
        super()

        this.state = {
            showModal: false
        }
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        var button
        if (this.props.allQuestionsDone) {
            button = <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.open.bind(this)}
            >
                Finish
            </Button>
        } else {
            button = <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.open.bind(this)}
                disabled
            >
                Finish
            </Button>
        }


        return (
            <div>
                {button}

                <Modal className="modalis" show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Body>
                        <h3>Deval Results</h3>
                        <p>
                            {this.props.oneOptionAnswer}<br/>
                            {this.props.plainAnswer}<br/>
                            {this.props.allQuestionsDone.toString()}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};

export default Modalis;