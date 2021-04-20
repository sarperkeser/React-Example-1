import React, { Component } from "react";
import UserTable from "./UserTable";

const inputs = [
  { title: "First name:", name: "userName", type: "text" },
  { title: "Surname:", name: "userSurname", type: "text" },
  { title: "Date:", name: "userDate", type: "date" }
]

export default class UserForm extends Component {
  
  state = {
    userName: "",
    userSurname: "",
    userDate: "",
    users: []
  };

  onChangeInput = e => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  isFormValid = () => {
    return new Promise((resolve, reject) => {
      const {userName, userSurname, userDate} = this.state
      if (userName === "" || userSurname === "" || userDate === "") {
        reject()
      } else {
        resolve()
      }
    })
  }

  showAlert = () => alert("Fill all the inputs")

  onFormSubmit = e => {
    e.preventDefault();
    this.isFormValid()
    .then(this.saveUser)
    .catch(this.showAlert)
  }
  
  saveUser = () => {
    const {userName, userSurname, userDate} = this.state
    this.setState(prev => ({
      users: [...prev.users, {userName, userSurname, userDate}],
      userName: "",
      userSurname: "",
      userDate: "",
    }))
  }
  
  deleteUser = selectedIndex => {
    this.setState(prev => ({
      users: prev.users.filter((user, index) => selectedIndex !== index)
    }))
  }

  renderInput = ({title, name, type}, key) => {
    return (
      <div key={key} className="mb-3">
        <label>{title}</label>
        <br />
        <input
          onChange={this.onChangeInput}
          value={this.state[name]}
          type={type}
          name={name}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <form className="mb-10">
          {inputs.map(this.renderInput)}
          <button className="mb-3" onClick={this.onFormSubmit}>Save</button>
        </form>
        <UserTable 
          users={this.state.users}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}
