import React, { Component } from 'react'

export default class Usertable extends Component {
    state = {
        user: [

        ]
    };
    change = (event) => {
        if (this.props.username===""||this.props.usersurname==="" ||this.props.userdate===""){
            alert("tüm boşlukları doldurun")
        }
        else{
            let cart = this.state.user
        let random = Math.random() * 100
        //console.log(random)
        cart.push({ userName: this.props.username, ıd: random,userSurname:this.props.usersurname, userDate:this.props.userdate })
        //console.log(cart)
        this.setState({ user: cart })}
        

    }
    visiable=(event)=>{
        //console.log(event.target.value)
    }
    delete=(event)=>{
        if (window.confirm("silmek istiyormusunuz")) {
            console.log(event)
        
        let newıd=this.state.user.filter(a=>a.ıd !==event.ıd);
        console.log(newıd)
        this.setState({user:newıd})
          } 
        
    }
    render() {
        return (
            <div>
                <button onClick={this.change}>change1</button><br />
                <input onChange={this.visiable}></input>
                <table>
                    
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.user.map(user => (
                            <tr key={user.ıd}>
                                <th>{user.userName}</th>
                                <th>{user.userSurname}</th>
                                <th>{user.userDate}</th>
                                <th><button onClick={()=>this.delete(user)}>X</button></th>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}