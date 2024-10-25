import { Component } from "react";

class Increment extends Component {
    constructor() {
        super();
        
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    
    increment() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    
    decrement() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    
    render() {
        var a;
        if(this.state.count>5){
           a= <p style={{color:"red"}}>{this.state.count}</p>
        }else if(this.state.count>=0 && this.state.count<=5){
            a=<p style={{color:"green"}}>{this.state.count}</p>
        }else{
            a=<p style={{color:"yellow"}}>{this.state.count}</p>
        }
        return (
            <>
                <h1>Hello, I'm doing count</h1>
               
              {a}
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </>
        );
    }
}

export default Increment;
