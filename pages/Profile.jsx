import React, {useEffect, useState} from 'react';
import ProfileInfo from "../components/ProfileInfo.jsx";
import EditPassword from "../components/EditPassword.jsx";
import EditUsername from "../components/EditUsername.jsx";
import {useDispatch, useSelector} from "react-redux";
import actionCreator from "../services/actionCreator.js";
import {useNavigate} from "react-router";
import Basket from "../components/Basket.jsx";
import {sendMail} from "../services/authorizeMail.js";

const Profile = () => {
    const opens = {
        info: <ProfileInfo/>,
        name: <EditUsername/>,
        pass: <EditPassword/>,
        basket: <Basket/>,
    }
    const [select,setSelect] = useState('info');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector(state => state);
    let auth = user.auth;

    const logout = () => {
        dispatch(actionCreator.logout());
        navigate('/');
    }
    useEffect(()=>{
        if(auth===false)
            navigate('/');
    },[]);
    return (
        <div className={"page"}>
            <div className="profile-head">
                <main>
                    {opens[select]}
                </main>
                <div>
                    <nav>
                        <button className={select==='info'?'active':''} onClick={()=>setSelect('info')}>Profile info</button>
                        <button className={select==='name'?'active':''} onClick={()=>setSelect('name')}>Edit username</button>
                        <button className={select==='pass'?'active':''} onClick={()=>setSelect('pass')}>Edit password</button>
                        <button className={select==='basket'?'active':''} onClick={()=>setSelect('basket')}>Basket</button>
                        {user.email_verified===false&&<button onClick={()=>sendMail(user.email)}>Send email verify</button>}
                        <button onClick={logout}>Logout</button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Profile;