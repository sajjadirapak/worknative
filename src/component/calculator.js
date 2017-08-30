import React, { Component } from 'react';

class Calculator extends Component {
	constructor() {
		super();
		this.state={num1:0, num2:0}

	}
	setnumone(u){
		const num=u.target.value
		this.setState({num1:num})
	}
	setnumtwo(w){
		const num=w.target.value
		this.setState({num2:num})
	}
	render() {
		return (
			<div>
			<input onChange={this.setnumone.bind(this)}/>
			<input onChange={this.setnumtwo.bind(this)}/>
			{this.state.num1+this.state.num2}
			</div>
		)
	}
}

export default Calculator;
