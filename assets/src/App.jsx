import { Component } from "react";
import "./styles/index.css";
import styled from "styled-components";

const Title = styled.div.attrs({
  className: "black f1 tc ttu"
})`
  border: 2px solid green;
`;

export default class App extends Component {
  state = {
    name: "Your Sanctuary"
  };

  render() {
    return (
      <Title>
        <h1>Welcome to {this.state.name}</h1>
      </Title>
    );
  }
}
