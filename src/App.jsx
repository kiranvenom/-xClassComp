import React, { Component } from 'react';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}
	incrementCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	decrementCount = () => {
		this.setState({ count: this.state.count - 1 });
	};
	render() {
		return (
			<div>
				<h1>Counter App</h1>
				<h4>Count: {this.state.count}</h4>
				<div>
					<button onClick={this.incrementCount}>Increment</button>
					<button onClick={this.decrementCount}>Decrement</button>
				</div>
			</div>
		);
	}
}
