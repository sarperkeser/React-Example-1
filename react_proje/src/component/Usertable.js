import React, { Component } from 'react'

export default class Usertable extends Component {
    state = {
        user: [

        ],
        search1: ""

    };
    change = (event) => {
        if (this.props.username === "" || this.props.usersurname === "" || this.props.userdate === "") {
            alert("tüm boşlukları doldurun")
        }
        else {
            let cart = this.state.user
            let random = Math.random() * 100
            //console.log(random)
            cart.push({
                userName: this.props.username, ıd: random, userSurname: this.props.usersurname, userDate: this.props.userdate
            })
            //console.log(cart)
            this.setState({ user: cart })
        }
        

    }
    searchbar = (event) => {
        this.setState({ search1: event.target.value })

    }
    delete = (event) => {
        if (window.confirm("silmek istiyormusunuz")) {
            console.log(event)

            let newıd = this.state.user.filter(a => a.ıd !== event.ıd);
            console.log(newıd)
            this.setState({ user: newıd })
        }

    }
    render() {


        return (
            <div>

                <button onClick={this.change}>change1</button><br />
                <input onChange={this.searchbar}></input>
                <table>

                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.user.filter((val) => {
                            console.log(typeof (this.state.search1))
                            if (this.search1 == "") {
                                return val
                            } else if (val.userName.toLowerCase().includes(this.state.search1.toLowerCase())) {
                                return val
                            }
                        }
                        ).map(user => (
                            <tr key={user.ıd}>
                                <th>{user.userName}</th>
                                <th>{user.userSurname}</th>
                                <th>{user.userDate}</th>
                                <th><button onClick={() => this.delete(user)}>X</button></th>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}