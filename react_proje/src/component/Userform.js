import React, { Component } from 'react'
import Usertable from "./Usertable"

export default class Userform extends Component {
    state = {
        username: "",
        usersurname: "",
        userdate: "",
      }
    
      save=(event)=>{
        event.preventDefault();
        //alert(event.username);
        //let cart= this.state.user
        //cart.push({user:event.target.value})
        //this.setState({username:event.target.value})
        let name= event.target.name;
        let value=event.target.value;
        
        this.setState({[name]:value});
        //alert(this.state.username);
        //alert(this.state1.username)
        //document.getElementById
       //let a= document.getElementById("name")
       //this.setState({username:a});
       //console.log(cart)
    }
    

    render() {
        return (
            <div>
                <form>
                    <label>first name:</label><br />
                    <input onChange={this.save} type="text" name="username" id="name" ></input><br />
                    <label>surname:</label><br />
                    <input onChange={this.save} type="text" name="usersurname" ></input><br />
                    <label>date:</label><br />
                    <input onChange={this.save} type="date" name="userdate" ></input><br />
                    

                </form>
               
                
        
                <Usertable username={this.state.username} usersurname={this.state.usersurname} userdate={this.state.userdate}></Usertable>
            </div>
        )
    }
}
