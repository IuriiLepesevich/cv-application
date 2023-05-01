import React, { Component } from "react";
import uniqid from "uniqid";
import "../styles/Form.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Work from "./Work";
import AddRemoveButtons from "./AddRemoveButtons";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: true,
      generalInfo: {
        name: "",
        surname: "",
        mail: "",
        phone: "",
      },
      educations: [
        {
          school: "",
          field: "",
          dateStart: "",
          dateEnd: "",
          ongoing: false,
          id: uniqid(),
        },
      ],
      works: [
        {
          company: "",
          position: "",
          dateStart: "",
          dateEnd: "",
          ongoing: false,
          id: uniqid(),
        },
      ],
    };
    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
    this.changeEducationOngoing = this.changeEducationOngoing.bind(this);
    this.changeWorkOngoing = this.changeWorkOngoing.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeLastEducation = this.removeLastEducation.bind(this);
    this.addWork = this.addWork.bind(this);
    this.removeLastWork = this.removeLastWork.bind(this);
  }

  addEducation() {
    this.setState((state) => ({
      educations: state.educations.concat({
        school: "",
        field: "",
        dateStart: "",
        dateEnd: "",
        ongoing: false,
        id: uniqid(),
      }),
    }));
  }

  removeLastEducation() {
    this.setState((state) => ({
      educations: state.educations.slice(0, -1),
    }));
  }

  addWork() {
    this.setState((state) => ({
      works: state.works.concat({
        company: "",
        position: "",
        dateStart: "",
        dateEnd: "",
        ongoing: false,
        id: uniqid(),
      }),
    }));
  }

  removeLastWork() {
    this.setState((state) => ({
      works: state.works.slice(0, -1),
    }));
  }

  changeEducationOngoing(e) {
    this.setState((state) => {
      const targetId = e.target.dataset.id;
      const isChecked = e.target.checked;
      return {
        educations: state.educations.map((education) => {
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
        }),
      };
    });
  }

  changeWorkOngoing(e) {
    this.setState((state) => {
      const targetId = e.target.dataset.id;
      const isChecked = e.target.checked;
      return {
        works: state.works.map((work) => {
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
        }),
      };
    });
  }

  submitForm(e) {
    e.preventDefault();

    if (!this.state.isEditable) return;

    const newName = document.querySelector("#name").value;
    const newSurname = document.querySelector("#surname").value;
    const newMail = document.querySelector("#email").value;
    const newPhone = document.querySelector("#phone").value;

    this.setState((state) => ({
      isEditable: false,
      generalInfo: {
        name: newName,
        surname: newSurname,
        mail: newMail,
        phone: newPhone,
      },
    }));

    this.setState((state) => ({
      educations: state.educations.map((education) => {
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
      }),
    }));

    this.setState((state) => ({
      works: state.works.map((work) => {
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
      }),
    }));
  }

  editForm(e) {
    this.setState((state) => ({
      isEditable: true,
    }));
  }

  render() {
    const { educations, works, isEditable } = this.state;

    let educationButtons;
    let workButtons;
    const isEditableClass = `cv-form ${
      isEditable ? "editable" : "non-editable"
    }`;

    if (isEditable) {
      educationButtons = (
        <AddRemoveButtons
          add={this.addEducation}
          remove={this.removeLastEducation}
          name={"Education"}
        />
      );

      workButtons = (
        <AddRemoveButtons
          add={this.addWork}
          remove={this.removeLastWork}
          name={"Work"}
        />
      );
    }

    return (
      <form className={isEditableClass} onSubmit={this.submitForm}>
        <h1>CV Application</h1>
        <GeneralInfo
          title="General Info"
          editable={this.state.isEditable}
          textData={this.state.generalInfo}
        />
        {educations.map((education) => (
          <Education
            key={education.id}
            title="Education"
            editable={this.state.isEditable}
            changeEducationOngoing={this.changeEducationOngoing}
            textData={education}
          />
        ))}
        {educationButtons}
        {works.map((work) => (
          <Work
            key={work.id}
            title="Work"
            editable={this.state.isEditable}
            changeWorkOngoing={this.changeWorkOngoing}
            textData={work}
          />
        ))}
        {workButtons}
        <div className="buttons">
          <input type="submit" value="Submit" id="submit" />
          <input type="button" value="Edit" id="edit" onClick={this.editForm} />
        </div>
      </form>
    );
  }
}

export default Form;
