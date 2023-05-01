import React, { Component } from "react";
import "./styles/App.css";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
