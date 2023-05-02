import React from "react";
import "../styles/Work.css";

const Work = (props) => {
  const { title, editable, textData, changeWorkOngoing } = props;
  if (!editable)
    return (
      <div id={textData.id} className="work">
        <h2>{title}</h2>
        <div className="input-holder">
          <p id="work-name">
            <span>Work:</span>
            <span>{textData.company}</span>
          </p>
          <p id="work-position">
            <span>Position:</span>
            <span>{textData.position}</span>
          </p>
          <p id="work-date-start">
            <span>From:</span>
            <span>{textData.dateStart}</span>
          </p>
          <p id="work-date-end">
            <span>To:</span>
            <span>{textData.dateEnd}</span>
          </p>
        </div>
      </div>
    );
  else
    return (
      <div id={textData.id} className="work">
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
              data-id={textData.id}
              onChange={changeWorkOngoing}
              defaultChecked={textData.ongoing}
            />
          </div>
        </div>
      </div>
    );
};

export default Work;
