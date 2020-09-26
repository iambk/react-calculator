import React from 'react';
import Button from './components/button/Button';
import Input from './components/input/Input';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_one : '',
      input_two : '',
      error : '',
      output : 'Output'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleButton = this.handleButton.bind(this); 
  }

  handleInput(event) {
    this.setState({
      [event.target.id] : event.target.value
    });
  }

  handleButton(event) {
    if (event.target.id === 'clear') {
      this.setState({
        input_one : '',
        input_two : '',
        error : '',
        output : 'Output'
      });
    }
    else if (this.state.input_one === '' || this.state.input_two === '') {
      this.setState({
        error: 'Error: Input cannot be empty'
      });
    }  
    else {
      var input1 = parseFloat(this.state.input_one, 10);
      var input2 = parseFloat(this.state.input_two, 10);
      var result = '';
      var msg = '';
      
      if (isNaN(input1) || isNaN(input2)) {
        msg = 'Error: Input should only be a number';
      }
      
      else {
        // eslint-disable-next-line default-case
        switch(event.target.id) {
          case 'plus': result = input1 + input2;
          break;
          case 'minus': result = input1 - input2;
          break;
          case 'multiply': result = input1 * input2;
          break;
          case 'divide': result = input1 / input2;
          break;
        }
      }
      this.setState({
        error : msg,
        output : result
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Input id="input_one" value={this.state.input_one} placeholder="Input 1" onChange={this.handleInput} />
        <Input id="input_two" value={this.state.input_two} placeholder="Input 2" onChange={this.handleInput} />

        <div className="show-error">{this.state.error}</div>

        <Button id="plus" text="+" onClick={this.handleButton} />
        <Button id="minus" text="-" onClick={this.handleButton} />
        <Button id="multiply" text="*" onClick={this.handleButton} />
        <Button id="divide" text="/" onClick={this.handleButton} />
        <Button id="clear" text="Clear" onClick={this.handleButton} />

        <div id="output">{this.state.output}</div>
      </div>);
  }
}

export default App;
