import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  render() {
    const { title, editable, textData, changeEducationOngoing } = this.props;
    if (!editable)
      return (
        <div id={textData.id} className="education">
          <h2>{title}</h2>
          <div className="input-holder">
            <p id="school-name">{textData.school}</p>
            <p id="study-field">{textData.field}</p>
            <p id="study-date-start">{textData.dateStart}</p>
            <p id="study-date-end">{textData.dateEnd}</p>
          </div>
        </div>
      );
    else
      return (
        <div id={textData.id} className="education">
          <h2>{title}</h2>
          <div className="input-holder">
            <input
              required={true}
              type="text"
              id="school-name"
              placeholder="School Name"
              defaultValue={textData.school}
            />
            <input
              required={true}
              type="text"
              id="study-field"
              placeholder="Field of study"
              defaultValue={textData.field}
            />
            <div className="date-holder">
              <label htmlFor="study-date-start">Start: </label>
              <input
                required={true}
                type="date"
                id="study-date-start"
                defaultValue={textData.dateStart}
              />
            </div>
            <div className="date-holder">
              <label htmlFor="study-date-end">End: </label>
              <input
                required={!textData.ongoing}
                type="date"
                id="study-date-end"
                defaultValue={textData.dateEnd}
                disabled={textData.ongoing}
              />
              <label htmlFor="ongoing">Ongoing</label>
              <input
                type="checkbox"
                id="education-ongoing"
                data-id={textData.id}
                onChange={changeEducationOngoing}
                defaultChecked={textData.ongoing}
              />
            </div>
          </div>
        </div>
      );
  }
}

export default Education;
