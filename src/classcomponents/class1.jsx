import { Component } from "react";

class H1 extends Component {
    // Initial state
    constructor(props) {
        super(props);
        this.state = {
            a: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState((prevState) => ({
            a: prevState.a + 1
        }));
    }

    decrement() {
        this.setState((prevState) => ({
            a: prevState.a - 1
        }));
    }

    render() {
        console.log(this.state.a);
        
        return (
            <>
                <h1>Counter</h1>
                <h2>{this.state.a}</h2> {/* Display the current value */}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        );
    }
}

export default H1;
