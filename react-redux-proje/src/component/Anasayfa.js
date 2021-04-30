import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"

import { Addname } from "../redux/actions/AddAction"

function Anasayfa({ name1, Addname, ...props }) {

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

        const x = name1.find(a => a.name === username);
        const y = name1.find(a => a.surname === usersurname);
        const z = name1.find(a => a.date === userdate);
        if (x && y && z) {
            console.log("oldu")
            sessionStorage.clear();
            sessionStorage.setItem(Counter, username);
            sessionStorage.setItem(Counter + 1, usersurname);
            sessionStorage.setItem(Counter + 2, userdate);

        }

    }

    function change2(event) {
        const { name, value } = event.target
        if (name === "username") {
            setusername(value)
        } else if (name === "usersurname") {
            setusersurname(value)

        } else if (name === "userdate") {
            setuserdate(value)

        }
    }
    function hoşgeldin(e) {

        if (sessionStorage.getItem(0)) {
            console.log("sasda");
            return (<h1>hoş geldin {sessionStorage.getItem(0)}</h1>)
        } else {
            console.log(e)
        }
    }
    function exit() {
        sessionStorage.clear()
    }

    return (
        <div>
            <div>
                {hoşgeldin("boş")}

                <h1>giriş</h1>
                <form>
                    <label>first name:</label><br />
                    <input onChange={change2} type="text" name="username" id="name" ></input><br />
                    <label>surname:</label><br />
                    <input onChange={change2} type="text" name="usersurname" ></input><br />
                    <label>mail:</label><br />
                    <input onChange={change2} type="mail" name="userdate" ></input><br />
                    <button onClick={save} >giriş</button>
                    <button onClick={exit} >çıkış</button>


                </form>
            </div>
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

function mapStateToProps(state, ownProps) {

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

)(Anasayfa);