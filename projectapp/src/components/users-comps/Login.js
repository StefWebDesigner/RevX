import React, {useContext, useState} from 'react';
import Navbar from "../navbar/Navbar";
import {useNavigate} from "react-router-dom";
import DataStore from "../../dataStore/dataStore";
import axios from "axios";

const Login = () => {

    //SETUSENAME & PASSWORD FOR INPUT COLLECTION
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //CALLING THE USERNAVIGATOR
    const navigator = useNavigate();

    //IT CALLS THE DATASTORE GLOBAL VARIABLE FORM STORE
    const {setUser} = useContext(DataStore);


    //LOGIN IN FUNCTION
    async function login (e) {
        e.preventDefault();

        //CHECKING FOR ALL FIELD INPUT
        if(!username.trim() || !password.trim() ) {
            alert("Please enter all information");
            return;
        }

        const {data} = await axios.get(`http://localhost:8080/user/login?username=${username}&password=${password}`);

        //PASS DATA RECIEVED FROM AXIOS CALL TO SETUSER
        setUser(data);

        //DATA IS STORED INTO LOCALSTORE TO BE RETIREVED THE USEID/ACCOUNT...AND MORE!
        localStorage.setItem("user", JSON.stringify(data));

        //AFTER SUCCESSFUL IT WILL REDIRECT TO HOME PAGE
        navigator("/");
    }

    return (
        <>
            {/*IMPORTED NAV HEADER*/}
            <Navbar/>

            {/*LOGIN FORM*/}
            <form>
                <label> Enter Username : </label>
                <input
                    type="username"
                    name="username"
                    placeholder="username"
                    onChange={(e) => {setUsername(e.target.value)}}
                />

                <label> Enter password : </label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => {setPassword(e.target.value)}}
                />

                {/*BUTTON WITH THE LOGIN FORM*/}
                <button
                    type="submit"
                    onClick={login}
                >
                    Login
                </button>
            </form>
        </>
    );
};

export default Login;
