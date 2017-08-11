import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Brian'
        }
    }

    handleClick() {
        this.setState({name: 'James'});
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                <button onClick={this.handleClick.bind(this)}>Change Name</button>
            </div>
        );
    }
}
