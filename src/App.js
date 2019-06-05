import React from 'react';
import OptionBox from "./components/OptionBox";
import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissors from "./images/scissors.png";
// import Results from "./components/Results"
import { Container, Header, } from "semantic-ui-react";

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
        <Header as="h1" textAlign="center">React Rock Paper Scissors</Header>
        <hr />
        <OptionBox name="rock" img={rock} optionClick={this.optionClick} />
        <OptionBox name="paper" img={paper} optionClick={this.optionClick} />
        <OptionBox name="scissors" img={scissors} optionClick={this.optionClick} />
        <hr />
        
        {/* <Results 
          user={this.state.userChoice}
          comp={this.state.compChoice}
        /> */}

      </Container>
    );
  };
};

export default App;
