import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"


import { Addname } from "../redux/actions/AddAction"



function Register({ name1, Addname, ...props }) {
    const [Name, setName1] = useState({ ...props.name1 })
    const [username, setusername] = useState()
    const [usersurname, setusersurname] = useState()
    const [userdate, setuserdate] = useState()
    const [Counter, setCounter] = useState(0)
    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            const name = localStorage.getItem(i);
            const surname = localStorage.getItem(i + 1);
            const date = localStorage.getItem(i + 2);
            i = i + 2

            Addname(name, surname, date)
        }
        setName1(name1)

    }, [props.Name])


    function save(event) {
        event.preventDefault();



        Addname(username, usersurname, userdate)
        localStorage.setItem(Counter, username);
        localStorage.setItem(Counter + 1, usersurname);
        localStorage.setItem(Counter + 2, userdate);
        setCounter(Counter + 3)

        console.log("locale")

        setName1(name1)


    }

    function change1(event) {
        event.preventDefault();

        const value = event.target.value;
        const name = event.target.name;
        if (name === "username") {
            setusername(value)

        } else if (name === "usersurname") {
            setusersurname(value)

        } else if (name === "userdate") {
            setuserdate(value)

        }

    }
    return (
        <div>
            <h1>register</h1>
            <form>
                <label>first name:</label><br />
                <input onChange={change1} type="text" name="username" id="name" ></input><br />
                <label>surname:</label><br />
                <input onChange={change1} type="text" name="usersurname" ></input><br />
                <label>mail:</label><br />
                <input onChange={change1} type="mail" name="userdate" ></input><br />
                <button onClick={save} >save</button>


            </form>

            <table>

                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>mail</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        name1.map((user, index) => (
                            <tr key={index}>
                                <th>{user.name}</th>
                                <th>{user.surname}</th>
                                <th>{user.date}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}




function mapStateToProps(state) {
    return {

        name1: state.AddReducer
    };
}
const mapDispatchToProps = {
    Addname
}

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Register);