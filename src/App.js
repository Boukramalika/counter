import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Counter from "./Components/Counter";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  incrementCount = (e) => {
    if (this.state.count < 100) {
      this.setState({ count: this.state.count + 1 });

    }

  }

  descrementCount = (e) => {
    if (this.state.count > 0) {

      this.setState({ count: this.state.count - 1 });
    }


  }


  render() {
    return (
      <div className="App ">
        <h1 className ="header ">Counter</h1>
        
        <Counter
          count={this.state.count}
          addFunction={this.incrementCount}
          subtractFunction={this.descrementCount}>
        </Counter>
      </div >
    )
  };
}

export default App; 
