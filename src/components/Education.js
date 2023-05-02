import React from "react";
import "../styles/Education.css";

const Education = (props) => {
  const { title, editable, textData, changeEducationOngoing } = props;
  if (!editable)
    return (
      <div id={textData.id} className="education">
        <h2>{title}</h2>
        <div className="input-holder">
          <p id="school-name">
            <span>School:</span>
            <span>{textData.school}</span>
          </p>
          <p id="study-field">
            <span>Field:</span>
            <span>{textData.field}</span>
          </p>
          <p id="study-date-start">
            <span>From:</span>
            <span>{textData.dateStart}</span>
          </p>
          <p id="study-date-end">
            <span>To:</span>
            <span>{textData.dateEnd}</span>
          </p>
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
};

export default Education;
