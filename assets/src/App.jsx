import { Component } from "react";
import "./styles/index.css";

export default class App extends Component {
  state = {
    name: "Your Sanctuary"
  };

  render() {
    return (
      <div className="App white">
        <h1>Welcome to {this.state.name}</h1>
      </div>
    );
  }
}
