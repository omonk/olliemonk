import React from 'react';
import ReactDOM from 'react-dom';

class Slider extends React.Component {
    render() {
        return(
            <input ref="inp"
            type="range"
            min="0"
            max="255"
            val={this.props.val}
            className={this.props.class}
            onChange={this.props.update}/>
        )
    }
}

Slider.defaultProps = {
    class: 'input-range',
    val: 0
}

export default Slider
