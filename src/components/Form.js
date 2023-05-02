import React, { useState } from "react";
import uniqid from "uniqid";
import "../styles/Form.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Work from "./Work";
import AddRemoveButtons from "./AddRemoveButtons";

const Form = (props) => {
  const [isEditable, setIsEditable] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    surname: "",
    mail: "",
    phone: "",
  });
  const [educations, setEducations] = useState([
    {
      school: "",
      field: "",
      dateStart: "",
      dateEnd: "",
      ongoing: false,
      id: uniqid(),
    },
  ]);
  const [works, setWorks] = useState([
    {
      company: "",
      position: "",
      dateStart: "",
      dateEnd: "",
      ongoing: false,
      id: uniqid(),
    },
  ]);

  const addEducation = () => {
    setEducations(
      educations.concat({
        school: "",
        field: "",
        dateStart: "",
        dateEnd: "",
        ongoing: false,
        id: uniqid(),
      })
    );
  };

  const removeLastEducation = () => {
    setEducations(educations.slice(0, -1));
  };

  const addWork = () => {
    setWorks(
      works.concat({
        company: "",
        position: "",
        dateStart: "",
        dateEnd: "",
        ongoing: false,
        id: uniqid(),
      })
    );
  };

  const removeLastWork = () => {
    setWorks(works.slice(0, -1));
  };

  const changeEducationOngoing = (e) => {
    const targetId = e.target.dataset.id;
    const isChecked = e.target.checked;
    setEducations(
      educations.map((education) => {
        if (education.id === targetId) {
          return {
            school: education.school,
            field: education.field,
            dateStart: education.dateStart,
            dateEnd: education.dateEnd,
            ongoing: isChecked,
            id: education.id,
          };
        } else return education;
      })
    );
  };

  const changeWorkOngoing = (e) => {
    const targetId = e.target.dataset.id;
    const isChecked = e.target.checked;
    setWorks(
      works.map((work) => {
        if (work.id === targetId) {
          return {
            company: work.school,
            position: work.field,
            dateStart: work.dateStart,
            dateEnd: work.dateEnd,
            ongoing: isChecked,
            id: work.id,
          };
        } else return work;
      })
    );
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!isEditable) return;

    const newName = document.querySelector("#name").value;
    const newSurname = document.querySelector("#surname").value;
    const newMail = document.querySelector("#email").value;
    const newPhone = document.querySelector("#phone").value;

    setIsEditable(false);

    setGeneralInfo({
      name: newName,
      surname: newSurname,
      mail: newMail,
      phone: newPhone,
    });

    setEducations(
      educations.map((education) => {
        const currentId = education.id;
        const newSchool = document.querySelector(
          `#${currentId} #school-name`
        ).value;
        const newField = document.querySelector(
          `#${currentId} #study-field`
        ).value;
        const newDateStart = document.querySelector(
          `#${currentId} #study-date-start`
        ).value;
        const educationIsOngoing = document.querySelector(
          `#${currentId} #education-ongoing`
        ).checked;
        let newDateEnd = "";
        if (educationIsOngoing) {
          newDateEnd = "Now";
        } else {
          newDateEnd = document.querySelector(
            `#${currentId} #study-date-end`
          ).value;
        }
        return {
          school: newSchool,
          field: newField,
          dateStart: newDateStart,
          dateEnd: newDateEnd,
          ongoing: educationIsOngoing,
          id: currentId,
        };
      })
    );

    setWorks(
      works.map((work) => {
        const currentId = work.id;
        const newCompany = document.querySelector(
          `#${currentId} #work-name`
        ).value;
        const newPosition = document.querySelector(
          `#${currentId} #work-position`
        ).value;
        const newDateStart = document.querySelector(
          `#${currentId} #work-date-start`
        ).value;
        const workIsOngoing = document.querySelector(
          `#${currentId} #work-ongoing`
        ).checked;
        let newDateEnd = "";
        if (workIsOngoing) {
          newDateEnd = "Now";
        } else {
          newDateEnd = document.querySelector(
            `#${currentId} #work-date-end`
          ).value;
        }
        return {
          company: newCompany,
          position: newPosition,
          dateStart: newDateStart,
          dateEnd: newDateEnd,
          ongoing: workIsOngoing,
          id: work.id,
        };
      })
    );
  };

  const editForm = (e) => {
    setIsEditable(true);
  };

  let educationButtons;
  let workButtons;
  const isEditableClass = `cv-form ${isEditable ? "editable" : "non-editable"}`;

  if (isEditable) {
    educationButtons = (
      <AddRemoveButtons
        add={addEducation}
        remove={removeLastEducation}
        name={"Education"}
      />
    );

    workButtons = (
      <AddRemoveButtons add={addWork} remove={removeLastWork} name={"Work"} />
    );
  }

  return (
    <form className={isEditableClass} onSubmit={submitForm}>
      <h1>CV Application</h1>
      <GeneralInfo
        title="General Info"
        editable={isEditable}
        textData={generalInfo}
      />
      {educations.map((education) => (
        <Education
          key={education.id}
          title="Education"
          editable={isEditable}
          changeEducationOngoing={changeEducationOngoing}
          textData={education}
        />
      ))}
      {educationButtons}
      {works.map((work) => (
        <Work
          key={work.id}
          title="Work"
          editable={isEditable}
          changeWorkOngoing={changeWorkOngoing}
          textData={work}
        />
      ))}
      {workButtons}
      <div className="buttons">
        <input type="submit" value="Submit" id="submit" />
        <input type="button" value="Edit" id="edit" onClick={editForm} />
      </div>
    </form>
  );
};

export default Form;
