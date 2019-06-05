import React from 'react';
import OptionBox from "./components/OptionBox";
import Results from "./components/Results"
import { Container, Header, } from "semantic-ui-react";
import './app.css';

class App extends React.Component {
  state = { userChoice: null, compChoice: null, };

  randomChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  optionClick = (option) => {
    this.setState({ userChoice: option, compChoice: this.randomChoice() })
  }

  render() {
    return (
      <Container style={{ marginTop: "25px", }}>
        <Header as="h1" textAlign="center" color="blue">React Rock Paper Scissors</Header>
        <hr />
        <div>
          <Header as="h3" color="purple" textAlign="center">Select your weapon:</Header>
          <OptionBox optionClick={this.optionClick} />
        </div>
        <hr />
        <div id="results">
          <Header>Game Results</Header>
          <Results 
            user={this.state.userChoice}
            comp={this.state.compChoice}
          />
        </div>
      </Container>
    );
  };
};

export default App;
