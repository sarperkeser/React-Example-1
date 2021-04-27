import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as categoryActions from "../redux/actions/categoryActions"

function Anasayfa() {
    const [name, setName] = useState()
    const [namestate, setNameState] = useState({})
    const a=[]
    function change(event) {
        //console.log(event.target.value)
        let a = event.target.value
        setName(a)
        //console.log(name)
    }
    function save(event) {
        event.preventDefault();
        
        a.push(name)
        setNameState({a})
        console.log(namestate)
    }
    
    return (
        <div>

            <form>
                <label>first name:</label><br />
                <input onChange={change} type="text" name="username" id="name" ></input><br />
                <label>surname:</label><br />
                <input type="text" name="usersurname" ></input><br />
                <label>date:</label><br />
                <input type="date" name="userdate" ></input><br />
                <button onClick={save}>save</button>
                <h1>{name}</h1>

            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        formname: state.formnamereducer

    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: {
            getCategories: bindActionCreators(categoryActions.changeCategory, dispatch)
        }
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Anasayfa);