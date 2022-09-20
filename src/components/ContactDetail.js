import React from "react";
import user from '../images/user.png';
import {useLocation} from 'react-router-dom';

const ContactDetail = (props) => {
    const location = useLocation();
    const userDetail = location.state.contact;
    return (
    <div className="main">
        <div className="ui card center">
            <div className="image">
                <img src={user} alt="user"/>
            </div>
            <div className="content">
                <div className="header">{userDetail.name}</div>
                <div className="description">{userDetail.email}</div>
            </div>
        </div>
    </div>
    );
}

export default ContactDetail;