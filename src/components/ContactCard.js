import React from "react";
import user from '../images/user.png';
import { Link,useNavigate } from "react-router-dom";
const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    const navigate = useNavigate();

    const renderComponent = (str) => {
        if(str==='details'){
        navigate(`/contact/${id}`,{state:{contact:props.contact}})
        }else{
            navigate(`/edit/${id}`,{state:{contact:props.contact}})
        }
    }

    return (
    <div className="item">
        <img className="ui avatar image" src={user}
        alt="user/"/>
                <div className="content">
                    <a href="javascript:void(0)" onClick={()=>{renderComponent('details')}}>
                    <div className="header">
                        {name}
                    </div>
                    <div>
                        {email}
                    </div>
                    </a>
                </div>
                <i className="trash alternate outline icon"
                style={{color:"red",marginTop:"7px",float:"right"}} onClick={()=>props.clickHandler(id)}></i>
                <a href="javascript:void(0)" onClick={()=>{renderComponent('edit')}}>
                <i className="edit alternate outline icon"
                style={{color:"blue",marginTop:"7px",float:"right",marginLeft:"10px"}}></i>
                </a>
            </div>
    );
}

export default ContactCard;