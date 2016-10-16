import React from 'react';
import { Radio, Well } from 'react-bootstrap';


class OneOption extends React.Component {

    constructor() {
        super()

        this.state = {
            answers : [],
            selectedRadio : 'none',
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
            {id: 1, option: 'JavaScript dialect'},
            {id: 2, option: 'JavaScript library'},
            {id: 3, option: 'JavaScript syntax extension'},
        ]

        return answers.map((answer) => {
            return (
                <Radio key={answer.id} checked={this.state.selectedRadio === answer.id} onChange={this.handleRadioClick.bind(this, answer.id)}>
                    {answer.option}
                </Radio>
            )
        })
    }

    handleRadioClick(key) {
        //console.log('You have selected:', key);
        this.setState({
            selectedRadio : key
        })
        this.props.collectOneOptionAnswer(key)
    }

}
export default OneOption;


