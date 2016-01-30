import React from 'react';
import ReactDOM from 'react-dom';

class MountingButton extends React.Component {
    constructor() {
        super()
        this.state = { val: 0};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({
            val: this.sate.val + 1
        })
    }

    componentWillMount(){
        console.log('mounting');
    }

    render() {
        return (
            <button onClick={this.update} type="submit">{this.state.val}</button>
        );
    }

    componentDidMount() {
        console.log('mounted');
    }
}

export default MountingButton
