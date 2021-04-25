import React, { Component } from 'react';
import Counter from './counter';
import Description from './description';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0}
        ]
    };

    handleDelete = (counterId) => {
        console.log(this.state.counters[counterId]);
    };

    render() {
        return (
        <div>
            <h4><Description/></h4>
            { this.state.counters.map(counter => 
            <Counter key={counter.id} value={counter.value} onDelete = {this.handleDelete(counter.id)}></Counter> )}
        </div> );
    }
}

export default Counters;