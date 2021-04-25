import React, { Component, createContext } from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class Counter extends Component {
    state = {
        value : this.props.value,
        currentState : 'operator',
        storedValue_1 : 0,
        storedValue_2 : 0
    };
    
    handleIncrement = () => {
        this.setState( {value: parseFloat(this.state.value) + parseFloat(1) } );
    };

    handleDelete = () => {
        this.setState( {value: this.state.value = 0} );
    };

    handleMultiply = () => {
        this.setState( {value: this.state.value = this.state.value * 2} );
    };

    chooseOperator = () => {
        switch (this.state.currentState) {
            case '+':
                return parseFloat(this.state.storedValue_1) + parseFloat(this.state.storedValue_2);
            case '-':
                return parseFloat(this.state.storedValue_1) - parseFloat(this.state.storedValue_2);
            case 'x':
                return parseFloat(this.state.storedValue_1) * parseFloat(this.state.storedValue_2);
            case '/':
                return parseFloat(this.state.storedValue_1) / parseFloat(this.state.storedValue_2);
            case '&#8730;':
                return Math.sqrt(parseFloat(this.state.storedValue_1));
            default:
                return "result";
        }
    };

    render () {
        return (
            <div align='center'>
                {this.props.children}
                <h3><span className = "badge badge-primary" style= {{backgroundColor: '#282c34'}}>{this.state.value}</span></h3>
                <InputGroup style = {{paddingInline: "50px"}}>
                    {/* <InputGroupAddon addonType = "prepend">
                        <InputGroupText>Value:</InputGroupText>
                    </InputGroupAddon> */}
                    <Input placeholder="Input 1st value here" className = 'm-2' style = {{border: '2px solid'}} onChange = {(e) => {this.setState( {storedValue: this.state.storedValue_1 = e.target.value} )}}></Input>                    
                </InputGroup>
                <InputGroup style = {{paddingInline: "50px"}}>
                    <Input placeholder="Input 2nd value here" className = 'm-2' style = {{border: '2px solid'}} onChange = {(e) => {this.setState( {storedValue: this.state.storedValue_2 = e.target.value} )}}></Input>
                </InputGroup>
                <br></br>
                <div>
                    {(this.state.storedValue_1 === 0) ? "": this.state.storedValue_1} {(this.state.currentState === "operator") ? "": this.state.currentState} {(this.state.storedValue_2 === 0) ? "": this.state.storedValue_2} {((this.state.storedValue_1 === 0) && (this.state.storedValue_2 === 0)) ? "": "="} {(this.chooseOperator() === "result") ? "": this.chooseOperator()}
                </div>
                <br></br>
                <button className = "btn btn-outline-primary m-4" onClick = {() => {this.setState( {currentState: this.state.currentState = "+"} )}}>+</button>
                <button className = "btn btn-outline-success m-4" onClick = {() => {this.setState( {currentState: this.state.currentState = "-"} )}}>-</button>
                <button className = "btn btn-outline-warning m-4" onClick = {() => {this.setState( {currentState: this.state.currentState = "x"} )}}>x</button>
                <button className = "btn btn-outline-info m-4" onClick = {() => {this.setState( {currentState: this.state.currentState = "/"} )}}>/</button>
                <br></br>
                <button className = "btn btn-sm btn-primary m-2" onClick = {() => {this.setState( {value: this.state.value = this.chooseOperator()} )}}>Submit</button>
                <button className = "btn btn-success btn-sm m-2" onClick = {() => {this.handleIncrement()}}>Increment</button>
                <button className = "btn btn-warning btn-sm m-2" onClick = {() => {this.handleDelete()}}>Reset</button>
                <button className = "btn btn-info btn-sm m-2" onClick = {() => {this.handleMultiply()}}>Multiply by 2!</button>
            </div>
        );
        
    };
}

export default Counter;