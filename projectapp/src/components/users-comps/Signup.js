import React, {useState} from 'react';
import Navbar from "../navbar/Navbar";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";

const Signup = () => {

    const [signup, setSignup] = useState({
        username : "",
        email : " ",
        password : " "
    });

    //CALLILNG NAVIGATOR
    const navigate = useNavigate();

    //POST AXIOS & EMAIL AND VALIDATION
    const submitSignup = async(e) => {
        e.preventDefault();

        const emailFormat =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        //VALIDATOR & CHECK ALL FIELDS FILLED
        if(!signup.username.trim() || !signup.email.trim() || !signup.password.trim()){
            alert("Fill in all fields please");
            return;
        }

        //EMAIL FORAMT
        if(!signup.email.match(emailFormat)) {
            alert("Enter proper email format");
            return;
        }

        //REPLACE URL
        const data = await axios.post(`http://localhost:8080/user`, signup);
        console.log(data);

        //RESET INPUT FIELDS AFTER POSTING
        setSignup({
            username: "",
            email : "",
            password : ""
        });

        //AFTER POSTING IT WILL AUTOMATICALLY NAVIGATE TO LOGIN PAGE
        navigate("/login");
    }

    //IT TRACKS THE CHANGE IN THE INPUTS FIELDS
    const ChangeHandlerSignup = (e) => {
        setSignup({
            ...signup,
            [e.target.name] : [e.target.value],
        });
    }

    console.log(signup);

    return (
        <>
            {/*Contain Nav*/}
            <Navbar/>

            {/*Sign Up Form*/}
            <section>
                <form onSubmit={submitSignup}>
                    <label>
                        Enter username:
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={signup.username}
                        onChange={ChangeHandlerSignup}
                        placeholder="username"
                        required
                    />

                    <label>
                        Enter email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={signup.email}
                        onChange={ChangeHandlerSignup}
                        placeholder="email"
                        required
                    />

                    <label>
                        Enter password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={signup.password}
                        onChange={ChangeHandlerSignup}
                        placeholder="password"
                        required
                    />

                    <button type="submit">
                        Signup
                    </button>
                </form>
            </section>
        </>
    );
};

export default Signup;
