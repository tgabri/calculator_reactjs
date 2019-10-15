import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import { evaluate } from 'mathjs';

class App extends Component {
  state = {
    input: '',
    result: ''
  };

  handleClear = () => {
    this.setState({
      input: '',
      result: ''
    });
  };

  handleInput = value => {
    this.setState({
      input: this.state.input + value
    });
  };

  handleEqual = () => {
    const { input } = this.state;
    let formattedInput = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'x') formattedInput = formattedInput + '*';
      else if (input[i] === '÷') formattedInput = formattedInput + '/';
      else formattedInput = formattedInput + input[i];
    }
    this.setState({
      result: evaluate(formattedInput).toString()
    });
  };

  render() {
    const { input, result } = this.state;
    return (
      <div className='App'>
        <div className='wrapper'>
          <Input input={input} result={result} />
          <div className='row'>
            <ClearButton handleClear={this.handleClear}>AC</ClearButton>
            <Button handleInput={this.handleInput}>±</Button>
            <Button handleInput={this.handleInput}>%</Button>
            <Button handleInput={this.handleInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleInput={this.handleInput}>1</Button>
            <Button handleInput={this.handleInput}>2</Button>
            <Button handleInput={this.handleInput}>3</Button>
            <Button handleInput={this.handleInput}>-</Button>
          </div>
          <div className='row'>
            <Button handleInput={this.handleInput}>4</Button>
            <Button handleInput={this.handleInput}>5</Button>
            <Button handleInput={this.handleInput}>6</Button>
            <Button handleInput={this.handleInput}>x</Button>
          </div>
          <div className='row'>
            <Button handleInput={this.handleInput}>7</Button>
            <Button handleInput={this.handleInput}>8</Button>
            <Button handleInput={this.handleInput}>9</Button>
            <Button handleInput={this.handleInput}>÷</Button>
          </div>
          <div className='row'>
            <Button handleInput={this.handleInput}>0</Button>
            <Button handleInput={this.handleInput}>.</Button>
            <Button handleInput={() => this.handleEqual()}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
