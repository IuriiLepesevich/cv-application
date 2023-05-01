import React, { Component } from "react";
import "../styles/AddRemoveButtons.css";

class AddRemoveButtons extends Component {
  render() {
    const { add, remove, name } = this.props;
    return (
      <div className="button-holder">
        <button type="button" onClick={add}>
          Add {name}
        </button>
        <button type="button" onClick={remove}>
          Remove {name}
        </button>
      </div>
    );
  }
}

export default AddRemoveButtons;
