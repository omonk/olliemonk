import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {

    render() {
        return (
            <button type={this.props.type}>{this.props.children}</button>
        );
    }
}

Button.defaultProps = {
    type: 'submit'
}

export default Button
