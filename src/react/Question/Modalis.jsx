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
        return (
            <div>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.open.bind(this)}
                >
                    Finish
                </Button>

                <Modal className="modalis" show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Body>
                        <h3>Deval Results</h3>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
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