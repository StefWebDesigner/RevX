import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react';
import axios from "axios";

import DataStore from "../../dataStore/dataStore";
import "./forms.css";


function Login(props) {

    //CALL THE DATASTORE GLOBAL VARIABLE FROM STORE
    const { user, setUser } = useContext(DataStore);

    // //controls visibility of modal
    // var isLoggedIn;
    // user ? isLoggedIn=true: isLoggedIn=false;

    //potential error messages when validating form
    const [errorMessages, setErrorMessages] = useState({});
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    //used to track what to render on page -- new login form or error
    const [isSubmitted, setIsSubmitted] = useState(false);


    //validates user information upon submit
    async function handleSubmit(e) {

        e.preventDefault();

        var { username, password } = document.forms[0];

        //check that username is not only whitespace
        if(!username.value.trim()){

            setErrorMessages({ name: "uname", message: errors.uname });

        } else {

            //check if username is in database
            const { data } = await axios.get(`http://localhost:4000/userByName/${username.value}`);

            if (data) {
                //username in system - check if passwords match
                if (data.password === password.value) {
                    setIsSubmitted(true);
                    props.setShowLogin(false);

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
    }

    function renderErrorMessage(name) {
        if (name === errorMessages.name) {
            return (<div className="error">{errorMessages.message}</div>);
        }
    }

    function changeForm(){
        props.setShowLogin(false);
        props.setShowSignup(true);
    }

    const renderForm = (
        <Modal
            show={props.showLogin}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form onSubmit={handleSubmit}>
                <Modal.Header bsPrefix="formheading">
                {/* <Modal.Header> */}
                    <h3>Sign In</h3>
                    <div className="formbuttons">
                        <button className="selectedbutton">
                            Sign In
                        </button>
                        <button className="unselectedbutton" onClick={changeForm}>
                            Sign Up
                        </button>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Enter username: </Form.Label>
                        <Form.Control type="text" name="username" placeholder="username" required />
                        {renderErrorMessage("uname")}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter password: </Form.Label>
                        <Form.Control type="password" name="password" placeholder="password" required />
                        {renderErrorMessage("pass")}
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <button className="loginbtn" variant="none" type="submit">
                        Submit
                    </button>
                </Modal.Footer>
            </Form>
        </Modal>
    );

    return (isSubmitted ? "" : renderForm);
}

export default Login;