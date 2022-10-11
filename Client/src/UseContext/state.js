import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from "./context";

const State = (props) => {
    // states
    const [login, setlogin] = useState({ email: '', password: '' });

    // variables
    const url = "http://localhost:5000";
    const navigate = useNavigate();
    // Login HAndle CHange
    const loginHandleChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }
    // login SUbMit
    const loginSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email:login.email,password:login.password})
        })
        console.log(res)
        const data = await res.json();
        if (res.status===200){
            localStorage.setItem('token',data.Authorization)
            navigate('/home')
        }
        else {
            window.alert("Invalid Credentials or user Not Found")
        }
    }
    return (
        <div>
            <Context.Provider value={{ loginSubmit,loginHandleChange,login }}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

export default State
