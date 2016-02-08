// Would be great to try and do some CS validation here, not allowing
// user to update next input based on previous

import React from 'react';
import ReactDOM from 'react-dom';

class FormGroup extends React.Component {
    constructor() {
        super()
        this.state = {
            inputOne: ' ',
            inputTwo: ' '
        }
        this.update = this.update.bind(this);
    }

    update(e){
      this.setState({
        inputOne: ReactDOM.findDOMNode(this.refs.inputOne.refs.inp).value,
        inputTwo: ReactDOM.findDOMNode(this.refs.inputTwo.refs.inp).value
      })
    }

    render() {
        console.log(this.state.inputOne);
        return (
            <div>
                <AnInput ref="inputOne" thisType="range" update={this.update}/>
                {this.state.inputOne}
                <br/>
                <br/>
                <AnInput ref="inputTwo" thisType="textarea" update={this.update}/>
                {this.state.inputTwo}
            </div>
        )
    }
}

class AnInput extends React.Component {
    render() {
        return (
            <div>
                <input ref="inp" type={this.props.thisType} onChange={this.props.update}/>
            </div>
        )
    }
}

export default FormGroup
