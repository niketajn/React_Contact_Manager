import React from "react";
import user from '../images/user.png';
import { Link,useNavigate } from "react-router-dom";
const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    const navigate = useNavigate();

    const renderComponent = () => {
        navigate(`/contact/${id}`,{state:{contact:props.contact}})
    }

    return (
    <div className="item">
        <img className="ui avatar image" src={user}
        alt="user/"/>
                <div className="content">
                    <a href="javascript:void(0)" onClick={()=>{renderComponent()}}>
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
            </div>
    );
}

export default ContactCard;