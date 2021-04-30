import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"


import { Addname } from "../redux/actions/AddAction"

function Profilgüncelle({ name1, Addname, ...props }) {
    const [username, setusername] = useState()
    const [usersurname, setusersurname] = useState()
    const [userdate, setuserdate] = useState()
    useEffect(() => {

        for (let i = 0; i < localStorage.length; i++) {
            const name = localStorage.getItem(i);
            const surname = localStorage.getItem(i + 1);
            const date = localStorage.getItem(i + 2);
            i = i + 2
            
            Addname(name, surname, date)
        }
        const store = localStorage
        console.log(store.getItem(0))
       
    }, [props.Name])
    function upgrade() {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.getItem(i) === sessionStorage.getItem(0)) {
                localStorage.setItem(i, username)
                sessionStorage.setItem(0,username)
                localStorage.setItem(i+1, usersurname)
                sessionStorage.setItem(1,usersurname)
                localStorage.setItem(i+2, userdate)
                sessionStorage.setItem(2,userdate)
                i = i + 2
            }
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
    return (
        <div>
            Profilgüncelle
            <form>

                <label>first name:</label><br />
                <input onChange={change2} type="text" name="username" id="name" ></input><br />
                <label>surname:</label><br />
                <input onChange={change2} type="text" name="usersurname" ></input><br />
                <label>mail:</label><br />
                <input onChange={change2} type="mail" name="userdate" ></input><br />
                <button onClick={upgrade}>güncelle</button>
            </form>
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

)(Profilgüncelle);