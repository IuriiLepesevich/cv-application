import React, { Component } from "react";
import "../styles/Work.css";

class Work extends Component {
  render() {
    const { title, editable, textData, changeWorkOngoing } = this.props;
    if (!editable)
      return (
        <div className="work">
          <h2>{title}</h2>
          <div className="input-holder">
            <p id="work-name">{textData.company}</p>
            <p id="work-position">{textData.position}</p>
            <p id="work-date-start">{textData.dateStart}</p>
            <p id="work-date-end">{textData.dateEnd}</p>
          </div>
        </div>
      );
    else
      return (
        <div className="work">
          <h2>{title}</h2>
          <div className="input-holder">
            <input
              required={true}
              type="text"
              id="work-name"
              placeholder="Company"
              defaultValue={textData.company}
            />
            <input
              required={true}
              type="text"
              id="work-position"
              placeholder="Position"
              defaultValue={textData.position}
            />
            <div className="date-holder">
              <label htmlFor="work-date-start">Start: </label>
              <input
                required={true}
                type="date"
                id="work-date-start"
                defaultValue={textData.dateStart}
              />
            </div>
            <div className="date-holder">
              <label htmlFor="work-date-end">End: </label>
              <input
                required={!textData.ongoing}
                type="date"
                id="work-date-end"
                defaultValue={textData.dateEnd}
                disabled={textData.ongoing}
              />
              <label htmlFor="ongoing">Ongoing</label>
              <input
                type="checkbox"
                id="work-ongoing"
                onChange={changeWorkOngoing}
                defaultChecked={textData.ongoing}
              />
            </div>
          </div>
        </div>
      );
  }
}

export default Work;
