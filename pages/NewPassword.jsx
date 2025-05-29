import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

const NewPassword = () => {
    const uid = useParams();
    const [inputObj,setInputObj] = useState({});
    useEffect(()=>{

    },[NewPassword])
    return (
        <div className={"auth-container"}>
            <h2>Enter new password for account with username </h2>

        </div>
    );
};

export default NewPassword;