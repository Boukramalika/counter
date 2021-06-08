import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Counter from "./Components/Counter";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 0,
    }
  }

  decrementCount1 = () => {
    if (this.state.count1 !== 0) {
      this.setState({ count1: this.state.count1 - 1 })
    }
  }

  incrementCount1 = () => {
    if (this.state.count2 - 1 >= this.state.count1) {
      this.setState({ count1: this.state.count1 + 1 })
    }
  }

  decrementCount2 = () => {
    if (this.state.count2 !== 0) {
      this.setState({ count2: this.state.count2 - 1 })
    }
    if (this.state.count1 >= this.state.count2) {
      this.decrementCount1()
    }
  }

  incrementCount2 = () => {
    if (this.state.count2 < 100) {
      this.setState({ count2: this.state.count2 + 1 })
    }
  }



  render() {
    return (
      <div className="App ">
        <h1 className ="header ">Counter: 1</h1>
        
        <Counter
          count={this.state.count1}
          addFunction={this.incrementCount1}
          subtractFunction={this.descrementCount1}>
        </Counter>
        <h1 className ="header ">Counter: 2</h1>
        <Counter
          count={this.state.count2}
          addFunction={this.incrementCount2}
          subtractFunction={this.descrementCount2}>
        </Counter>
      </div >
    )
  };
}

export default App; 
