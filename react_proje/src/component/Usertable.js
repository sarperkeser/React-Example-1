import React, { Component } from "react";

export default class UserTable extends Component {
  
  state = {
    searchKeyword: "",
  };
  
  onChangeSearchInput = e => {
    this.setState({ searchKeyword: e.target.value });
  };
  
  deleteConfirm = selectedIndex => {
    if (window.confirm("Are you want to sure?")) {
      this.props.deleteUser(selectedIndex)
    }
  };

  filterUsers = val => {
    return val.userName.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
  }

  renderUserRow = (user, index) => {
    return (
      <tr key={index}>
        <th>{user.userName}</th>
        <th>{user.userSurname}</th>
        <th>{user.userDate}</th>
        <th>
          <button onClick={() => this.deleteConfirm(index)}>X</button>
        </th>
      </tr>
    )
  }
  
  render() {
    return (
      <div>
        <input placeholder="Search User" onChange={this.onChangeSearchInput}></input>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users
              .filter(this.filterUsers)
              .map(this.renderUserRow)
            }
          </tbody>
        </table>
      </div>
    );
  }
}
