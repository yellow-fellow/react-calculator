import React, { Component, createContext } from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import '../index.css';

class Counter extends Component {
    state = {
        value : 0,
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
                <br></br>
                <h3><span className = "badge badge-primary" style= {{backgroundColor: '#282c34'}}>{this.state.value}</span></h3>
                <br></br>
                <InputGroup style = {{paddingInline: "50px"}}>
                    <Input placeholder="Input 1st value here" className = 'm-2' style = {{border:"3px solid black", borderRadius: 10}} onChange = {(e) => {this.setState( {storedValue: this.state.storedValue_1 = e.target.value} )}}></Input>                    
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{(this.state.currentState === "operator") ? "": this.state.currentState} </div>
                    <Input placeholder="Input 2nd value here" className = 'm-2' style = {{border:"3px solid black", borderRadius: 10}} onChange = {(e) => {this.setState( {storedValue: this.state.storedValue_2 = e.target.value} )}}></Input>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{(this.state.currentState === 'operator') ? "": "="} {(this.chooseOperator() === "result") ? "": this.chooseOperator()}</div>
                </InputGroup>
                <br></br>
                <br></br>
                <div style = {{backgroundColor: 'white', border:"3px solid black", borderRadius: 10}}>
                    <button className = "btn btn-outline-primary m-4" onClick = {() => {this.setState( {currentState: this.state.currentState = "+"} )}}>+</button>
                    <button className = "btn btn-outline-success m-4" onClick = {() => {this.setState( {currentState: this.state.currentState = "-"} )}}>-</button>
                    <button className = "btn btn-outline-warning m-4" onClick = {() => {this.setState( {currentState: this.state.currentState = "x"} )}}>x</button>
                    <button className = "btn btn-outline-info m-4" onClick = {() => {this.setState( {currentState: this.state.currentState = "/"} )}}>/</button>
                    <hr></hr>
                    <button className = "btn btn-sm btn-primary m-2" onClick = {() => {this.setState( {value: this.state.value = this.chooseOperator()} )}}>Display result</button>
                    <button className = "btn btn-success btn-sm m-2" onClick = {() => {this.handleIncrement()}}>Increment by 1</button>
                    <button className = "btn btn-warning btn-sm m-2" onClick = {() => {this.handleDelete()}}>Reset result</button>
                    <button className = "btn btn-info btn-sm m-2" onClick = {() => {this.handleMultiply()}}>Multiply result by 2</button>
                </div>
            </div>
        );
        
    };
}

export default Counter;