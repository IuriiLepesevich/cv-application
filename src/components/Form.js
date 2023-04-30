import React, { Component } from "react";
import "../styles/Form.css";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Work from "./Work";

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
      education: {
        school: "",
        field: "",
        dateStart: "",
        dateEnd: "",
        ongoing: false,
      },
      work: {
        company: "",
        position: "",
        dateStart: "",
        dateEnd: "",
        ongoing: false,
      },
    };
    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
    this.changeEducationOngoing = this.changeEducationOngoing.bind(this);
    this.changeWorkOngoing = this.changeWorkOngoing.bind(this);
  }

  changeEducationOngoing(e) {
    this.setState((state) => {
      const { school, field, dateStart, dateEnd } = state.education;
      return {
        education: {
          school,
          field,
          dateStart,
          dateEnd,
          ongoing: e.target.checked,
        },
      };
    });
  }

  changeWorkOngoing(e) {
    this.setState((state) => {
      const { company, position, dateStart, dateEnd } = state.work;
      return {
        work: {
          company,
          position,
          dateStart,
          dateEnd,
          ongoing: e.target.checked,
        },
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

    const newSchool = document.querySelector("#school-name").value;
    const newField = document.querySelector("#study-field").value;
    const newEducationDateStart =
      document.querySelector("#study-date-start").value;
    const educationIsOngoing =
      document.querySelector("#education-ongoing").checked;
    let newEducationDateEnd = "";
    if (educationIsOngoing) {
      newEducationDateEnd = "Now";
    } else {
      newEducationDateEnd = document.querySelector("#study-date-end").value;
    }

    const newCompany = document.querySelector("#work-name").value;
    const newPosition = document.querySelector("#work-position").value;
    const newWorkDateStart = document.querySelector("#work-date-start").value;
    const workIsOngoing = document.querySelector("#work-ongoing").checked;
    let newWorkDateEnd = "";
    if (workIsOngoing) {
      newWorkDateEnd = "Now";
    } else {
      newWorkDateEnd = document.querySelector("#work-date-end").value;
    }

    this.setState((state) => ({
      isEditable: false,
      generalInfo: {
        name: newName,
        surname: newSurname,
        mail: newMail,
        phone: newPhone,
      },
      education: {
        school: newSchool,
        field: newField,
        dateStart: newEducationDateStart,
        dateEnd: newEducationDateEnd,
        ongoing: educationIsOngoing,
      },
      work: {
        company: newCompany,
        position: newPosition,
        dateStart: newWorkDateStart,
        dateEnd: newWorkDateEnd,
        ongoing: workIsOngoing,
      },
    }));
  }

  editForm(e) {
    this.setState((state) => ({
      isEditable: true,
    }));
  }

  render() {
    return (
      <form className="cv-form" onSubmit={this.submitForm}>
        <GeneralInfo
          title="General Info"
          editable={this.state.isEditable}
          textData={this.state.generalInfo}
        />
        <Education
          title="Education"
          editable={this.state.isEditable}
          changeEducationOngoing={this.changeEducationOngoing}
          textData={this.state.education}
        />
        <Work
          title="Work"
          editable={this.state.isEditable}
          changeWorkOngoing={this.changeWorkOngoing}
          textData={this.state.work}
        />
        <div className="buttons">
          <input type="submit" value="Submit" id="submit" />
          <input type="button" value="Edit" id="edit" onClick={this.editForm} />
        </div>
      </form>
    );
  }
}

export default Form;
