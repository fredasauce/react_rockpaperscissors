import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import { Image, } from "semantic-ui-react";

const OptionBox = (props) => (
    <Image.Group>
      <Image 
        src={rock} 
        size="small" 
        name="rock"
        onClick={() => props.optionClick("rock")} 
      />
      <Image 
        src={paper} 
        size="small" 
        name="paper"
        onClick={() => props.optionClick("paper")} 
      />
      <Image 
        src={scissors} 
        size="small" 
        name="scissors"
        onClick={() => props.optionClick("scissors")} 
      />
    </Image.Group>
);

export default OptionBox;