import React from "react";

class AddContact extends React.Component{
    state = {
        name:"",
        email:""
    }
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name" 
                        value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>
                    </div>
                    
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"
                        value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;