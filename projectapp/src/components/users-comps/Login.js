import React, {useContext, useState} from 'react';
import Navbar from "../navbar/Navbar";
import {useNavigate} from "react-router-dom";
import DataStore from "../../dataStore/dataStore";
import axios from "axios";
import './forms.css';

const Login = () => {

    //CALLING THE USERNAVIGATOR
    const navigator = useNavigate();

    //IT CALLS THE DATASTORE GLOBAL VARIABLE FORM STORE
    const {setUser} = useContext(DataStore);

    //potential error messages when validating form
    const [errorMessages, setErrorMessages] = useState({});
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    //used to track what to render on page -- new login form or error
    const [isSubmitted, setIsSubmitted] = useState(false);


    //LOGIN IN FUNCTION
    async function handleSubmit (e) {
        e.preventDefault();

        var { username, password } = document.forms[0];

        const {data} = await axios.get(`http://localhost:4000/userByName/${username}`);

        //validate user information
        if (data) {

            if (data.password === password.value) {
                setIsSubmitted(true);

                //PASS DATA RECIEVED FROM AXIOS CALL TO SETUSER
                setUser(data);
                
            } else {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    }

    //function to render error messages if username or password doesn't match
    function renderErrorMessage (name){
        if (name === errorMessages.name) {
            return (<div className="error">{errorMessages.message}</div>);
        }
    }

    //login form JSX element
    const renderForm = (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label>Enter username: </label>
                <input type="text" name="username" placeholder="username" required />
                {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
                <label>Enter password: </label>
                <input type="password" name="password" placeholder="password" required />
                {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
                <input type="submit" />
            </div>
        </form>
    );

    return (
            <div className="app">
                <div className="login-form">
                    <div className="title">Sign In</div>
                    {isSubmitted ? navigator('/') : renderForm}
                </div>
            </div>
    );
};

export default Login;
