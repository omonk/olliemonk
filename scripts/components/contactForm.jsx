import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';
import Slider from './slider.jsx';
import MountingButton from './ComponentLifecycle.jsx';

class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        }
        this.update = this.update.bind(this)
    }

    update(e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        })
    }

    render(){
        var blockColor = {
            background: 'rgb(' + this.state.red + ',' + this.state.green + ',' + this.state.blue + ')',
            width: 200,
            height: 200
        }
        return (
            <div>
                <Button type="submit">Button</Button>
                <Slider ref="red" update={this.update}/>
                {this.state.red}
                <Slider ref="green" update={this.update}/>
                {this.state.green}
                <Slider ref="blue" update={this.update}/>
                {this.state.blue}
                <div style={blockColor}></div>

            </div>
        )
    }
}

ReactDOM.render(
    <ContactForm/>,document.getElementById('contact')
);
