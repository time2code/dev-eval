import React from 'react';
import { Checkbox, Well } from 'react-bootstrap';


class MultiOption extends React.Component {

    constructor() {
        super()

        this.state = {
            answers : [],
            selectedCheckBoxes : [],
        }
    }

    render() {
        const answers = this.fetchAnswers()
        return (
            <div id="question">
                <h3>{this.props.question || 'Question is not defined'}</h3>
                <Well bsSize="small">
                    {answers}
                </Well>
            </div>
        )
    }

    fetchAnswers() {
        const answers = [
            {id: 1, option: 'JSX is optional for using React.js'},
            {id: 2, option: 'JSX tags have a tag name, attributes, and children'},
            {id: 3, option: 'You can not insert HTML entities within literal text in JSX'},
            {id: 4, option: 'Number of JSX Root Nodes returned from render - is one'},
        ]

        return answers.map((answer) => {
            return (
                <Checkbox key={answer.id} checked={this.checkBoxIsOn(answer.id)} onChange={this.handleCheckBoxClick.bind(this, answer.id)}>
                    {answer.option}
                </Checkbox>
            )
        })
    }

    checkBoxIsOn(key) {
        let selectedCheckBoxes = this.state.selectedCheckBoxes
        return selectedCheckBoxes.includes(key);
    }

    handleCheckBoxClick(key) {
        let selectedCheckBoxes = this.state.selectedCheckBoxes
        let idx = selectedCheckBoxes.indexOf(key)
        if (idx !== -1) {
            selectedCheckBoxes.splice(idx, 1)
        } else {
            selectedCheckBoxes.push(key)
        }
        console.log('You have selected:', key);
        this.setState({
            selectedCheckBoxes : selectedCheckBoxes
        })
    }

}
export default MultiOption;


