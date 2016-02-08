import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';
import Slider from './Slider.jsx';
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

    copy(e) {
        var t = e.target,
            c = t.dataset.copytarget,
            all = document.querySelectorAll('#color-val span'),
            strng = [],
            inp = (c ? document.querySelector(c) : null);

            for (var i = 0; i < all.length; i++) {
                strng.push(all[i].innerHTML)
            }

        var color =  strng.join('');

        console.log(color);

        if (inp && inp.select) {
            // select text
            inp.select();

            try { //try to copy the text
                console.log('copied');
                document.execCommand('copy');
                inp.blur()
            }

            catch(err) {
                console.log('nope');
            }
        } else {
            console.log('false');
        }
    }

    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        })
    }

    componentDidMount() {
        var el = document.getElementById('color-val');
            el.addEventListener('click', this.copy, true);
    }

    render(){
        var blockColor = {
            background: 'rgb(' + this.state.red + ',' + this.state.green + ',' + this.state.blue + ')'
        }
        return (
            <div className="container ta-c">
                <div className="block-color m-t" style={blockColor}></div>
                <Slider class="input-range red" ref="red" update={this.update}/>
                <Slider class="input-range green" ref="green" update={this.update}/>
                <Slider class="input-range blue" ref="blue" update={this.update}/>
                <p onClick={this.copy} id="color-val" className="m-t">RGB({this.state.red}, {this.state.green}, {this.state.blue})</p>
            </div>
        )
    }
}

ReactDOM.render(
    <ContactForm/>,document.getElementById('contact')
);

export default ContactForm
