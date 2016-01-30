import React from 'react';
import ReactDOM from 'react-dom';

class Slider extends React.Component {
    render() {
        return(
            <div>
            <input ref="inp"
            type="range"
            min="0"
            max="255"
            val={this.props.val}
            onChange={this.props.update}/>
            </div>
        )
    }
}

export default Slider
