import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSolvedValue: 0,
      userInputing: 0,
      operatorCondition: "",
      currentDisplayValue: 0,
      decimalCondition: "",
    }
    this.newNumber = this.newNumber.bind(this);
    this.clickAnOperator = this.clickAnOperator.bind(this);
    this.clearButton = this.clearButton.bind(this);
  }


  /********************************button functions start********************* */
  decimalButton() {
    this.setState({
      decimalCondition: ".",
    })
  }

  newNumber(numberClicked) {
    let copyOfUserInputing = this.state.userInputing;
    copyOfUserInputing = Number(copyOfUserInputing + this.state.decimalCondition + numberClicked);
    this.setState({
      userInputing: copyOfUserInputing,
      currentDisplayValue: copyOfUserInputing,
      decimalCondition: "",
    })
  }

  clickAnOperator(operatorClicked) {
    if (this.state.operatorCondition === "") {
      this.setState({
        currentSolvedValue: this.state.userInputing,
        operatorCondition: operatorClicked,
        currentDisplayValue: this.state.userInputing,
        userInputing: 0,
      })
    } else if (this.state.operatorCondition === "=") {
      console.log(this.state);
      this.setState({
        operatorCondition: operatorClicked,
        userInputing: 0,
      })
    }
    else if (this.state.operatorCondition === "X") {
      let multipled = this.state.userInputing * this.state.currentSolvedValue;
      this.setState({
        currentSolvedValue: multipled,
        operatorCondition: operatorClicked,
        currentDisplayValue: multipled,
        userInputing: 0,
      })
    } else if (this.state.operatorCondition === "/") {
      let divided = this.state.currentSolvedValue / this.state.userInputing;
      this.setState({
        currentSolvedValue: divided,
        operatorCondition: operatorClicked,
        currentDisplayValue: divided,
        userInputing: 0,
      })
    } else if (this.state.operatorCondition === "+") {
      let plus = this.state.userInputing + this.state.currentSolvedValue;
      this.setState({
        currentSolvedValue: plus,
        operatorCondition: operatorClicked,
        currentDisplayValue: plus,
        userInputing: 0,

      })
    } else if (this.state.operatorCondition === "-") {
      let minus = this.state.currentSolvedValue - this.state.userInputing;
      this.setState({
        currentSolvedValue: minus,
        operatorCondition: operatorClicked,
        currentDisplayValue: minus,
        userInputing: 0,

      })
    }

    //update next round so it knows what to do 
    let copyOfOperatorCondition = this.state.operatorCondition.slice();
    copyOfOperatorCondition = operatorClicked;
    this.setState({
      operatorCondition: copyOfOperatorCondition
    })
  }

  clearButton() {
    this.setState({
      currentSolvedValue: 0,
      userInputing: 0,
      operatorCondition: "",
      currentDisplayValue: 0,
      decimalCondition: "",
    })
  }
  /********************************button functions end********************* */

  render() {
    return <div>
      <h1>Calculator Built with React</h1>
      <div className="container row col-xs-12 col-xs-offset-3">
        <div id="calculator-display">
          <div className="col-xs-12 text-right bottom-align-text">
            <span> {this.state.currentDisplayValue}</span>
          </div>
        </div>
        <div id="calculator" className="">
          <div className="col-xs-12">
            <button className="col-xs-12 btn btnEqual" onClick={() => { this.clickAnOperator("=") }}>=</button>
          </div>
          <div className="col-xs-12">
            <span className="col-xs-3"><button onClick={() => { this.newNumber("9") }} className="btn btnNumber">9</button></span>
            <span className="col-xs-3"><button onClick={() => { this.newNumber("8") }} className="btn btnNumber">8</button></span>
            <span className="col-xs-3"><button onClick={() => { this.newNumber("7") }} className="btn btnNumber">7</button></span>
            <span className="col-xs-3"><button onClick={() => { this.clickAnOperator("X") }} className="btn btnOperator">X</button></span>
          </div>
          <div className="col-xs-12">
            <span className="col-xs-3"><button onClick={() => { this.newNumber("6") }} className="btn btnNumber">6</button></span>
            <span className="col-xs-3"><button onClick={() => { this.newNumber("5") }} className="btn btnNumber">5</button></span>
            <span className="col-xs-3"><button onClick={() => { this.newNumber("4") }} className="btn btnNumber">4</button></span>
            <span className="col-xs-3"><button onClick={() => { this.clickAnOperator("/") }} className="btn btnOperator">÷</button></span>
          </div>
          <div className="col-xs-12">
            <span className="col-xs-3"><button onClick={() => { this.newNumber("3") }} className="btn btnNumber">3</button></span>
            <span className="col-xs-3"><button onClick={() => { this.newNumber("2") }} className="btn btnNumber">2</button></span>
            <span className="col-xs-3"><button onClick={() => { this.newNumber("1") }} className="btn btnNumber">1</button></span>
            <span className="col-xs-3"><button onClick={() => { this.clickAnOperator("+") }} className="btn btnOperator">+</button></span>
          </div>
          <div className="col-xs-12">
            <span className="col-xs-3"> </span>
            <span className="col-xs-3"><button className="btn btnNumber" onClick={() => { this.decimalButton() }}>.</button></span>
            <span className="col-xs-3"><button onClick={() => { this.newNumber("0") }} className="btn btnNumber">0</button></span>
            <span className="col-xs-3"><button onClick={() => { this.clickAnOperator("-") }} className="btn btnOperator">-</button></span>
          </div>
          <div className="col-xs-12">
            <button className="col-xs-12 btn btnClear" onClick={() => { this.clearButton()}}>CLEAR</button>
          </div>
        </div>
      </div>
    </div>
  }
}

export default App;
