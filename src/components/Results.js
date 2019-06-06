import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import { Card, Image, } from "semantic-ui-react";

class Results extends React.Component {
  
  results = () => {
    switch (this.props.user) {
      case "rock":
        return <Image src={rock} size="small" wrapped />
      case "paper":
        return <Image src={paper} size="small" wrapped />
      case "scissors":
        return <Image src={scissors} size="small" wrapped />
      default:
        // do nothing
    }
  }

  resultsComp = () => {
    switch (this.props.comp) {
      case "rock":
        return <Image src={rock} size="small" wrapped />
      case "paper":
        return <Image src={paper} size="small" wrapped />
      case "scissors":
        return <Image src={scissors} size="small" wrapped />
      default:
        // do nothing
    }
  }

  // logic = () => {
  //   const rules = {
  //     "Rock": "Scissors",
  //     "Paper": "Rock",
  //     "Scissors": "Paper"
  //   }
  //   const {user, comp} = this.state
  //   if (user === comp) {
  //     this.setState({outcome: "Tie"})
  //   } else if (comp === rules[user]) {
  //     this.setState({outcome: "You Win" })
  //   } else {
  //     this.setState({outcome: "You Lose"})
  //   }
  // }
  
  render () {
    return (
      <div id="resultscards">
        <Card.Group centered>
          <Card>
            <span>{this.results()}</span>
            <Card.Content>
              <Card.Header>Your Choice</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <span>{this.resultsComp()}</span>
            <Card.Content>
              <Card.Header>
                Computer Choice
              </Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
      // <div>
      //   {this.logic()}
      // </div>

    )
  }

}

export default Results;