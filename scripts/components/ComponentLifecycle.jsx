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
            val: this.state.val + 1
        })
    }

    componentWillMount(){
        console.log('mounting');
    }

    render() {
        console.log('rendering')
        return (
            <button onClick={this.update} type="submit">{this.state.val}</button>
        );
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentWillUnmount() {
        console.log('unmounted');
    }
}

class Wrapper extends React.Component {

    constructor() {
        super();
    }

    mount() {
        ReactDOM.render(<MountingButton/>, document.getElementById('a'))
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>
        )
    }
}

export default Wrapper

// ReactDOM.render(
//     <Wrapper/>, document.getElementById('contact')
// )
