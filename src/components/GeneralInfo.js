import React, { Component } from "react";
import "../styles/GeneralInfo.css";

class GeneralInfo extends Component {
  render() {
    const { title, editable, textData } = this.props;
    if (!editable)
      return (
        <div className="general-info">
          <h2>{title}</h2>
          <div className="input-holder">
            <p id="name">{textData.name}</p>
            <p id="surname">{textData.surname}</p>
            <p id="email">{textData.mail}</p>
            <p id="phone">{textData.phone}</p>
          </div>
        </div>
      );
    else
      return (
        <div className="general-info">
          <h2>{title}</h2>
          <div className="input-holder">
            <input
              required={true}
              type="text"
              id="name"
              placeholder="Name"
              defaultValue={textData.name}
            />
            <input
              required={true}
              type="text"
              id="surname"
              placeholder="Surname"
              defaultValue={textData.surname}
            />
            <input
              required={true}
              type="email"
              id="email"
              placeholder="E-Mail"
              defaultValue={textData.mail}
            />
            <input
              required={true}
              type="tel"
              id="phone"
              placeholder="Phone"
              defaultValue={textData.phone}
            />
          </div>
        </div>
      );
  }
}

export default GeneralInfo;
