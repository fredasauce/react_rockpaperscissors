import React from 'react';
import OptionBox from "./components/OptionBox";
import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissors from "./images/scissors.png";
import { Container, Header, } from "semantic-ui-react";

class App extends React.Component {
  state = { userChoice: null, compChoice: null, };

  optionClick = (option) => {
    debugger
    // set state of optionClick to be rock
  }

  render() {
    return (
      <Container style={{ marginTop: "25px", }}>
        <Header as="h1">React Rock Paper Scissors</Header>
        <hr />
        <OptionBox name="rock" img={rock} optionClick={this.optionClick} />
        <OptionBox name="paper" img={paper} />
        <OptionBox name="scissors" img={scissors} />
      </Container>
    );
  };
};

export default App;
