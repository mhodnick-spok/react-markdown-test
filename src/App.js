import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactMarkdown from 'react-markdown';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: 'this is my input text'
    };
  }

  handleChange(event){
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div className="">
        <p className="">
          hi
        </p>

        <p>
          <textarea onChange={this.handleChange.bind(this)} value={this.state.input}></textarea>
        </p>

        <ReactMarkdown source={this.state.input} />
      </div>
    );
  }
}

export default App;
