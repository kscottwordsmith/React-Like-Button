import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    likes: 0,
    word: "likes",
  }

  handleClick = (e) => {
    let temp = this.state.likes + 1
    this.setState({
      likes: temp
    })
    this.grammar(temp)
  }

  grammar = (num) => {
    if (num === 1) {
      this.setState({
        word: "like"
      })
    } else {
      this.setState({
        word: "likes"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <button id="likes" onClick={this.handleClick}>{this.state.likes} {this.state.word}</button>
      </div>
    )
  }
}

export default App;
