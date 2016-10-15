import React from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';


class PlainAnswer extends React.Component {


    constructor() {
        super()

        this.state = {
            value: '',
        }
    }

    render() {
        return (

            <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
            >
                <ControlLabel><h3>{this.props.question || 'Question is not defined'}</h3></ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Put answer here"
                    onChange={this.handleChange.bind(this)}
                />
                <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>

        );
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 9) return 'warning';
    }
}

export default PlainAnswer;


