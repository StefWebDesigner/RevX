import React, {useContext, useState} from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

import DataStore from "../../dataStore/dataStore";
import "./forms.css";

const Signup = (props) => {

    //CALL THE DATASTORE GLOBAL VARIABLE FROM STORE
    const { user, setUser } = useContext(DataStore);

    //potential error messages when validating form
    const [errorMessages, setErrorMessages] = useState({});
    const errors = {
<<<<<<< HEAD
        name: "please enter your name",
=======
        fullname: "please enter your name",
>>>>>>> 5c98f738987ea964d358d8ecf4ce080f8d7b29fa
        uname: "invalid username",
        unameused: "username taken",
        email: "invalid email format"
    };

<<<<<<< HEAD
    //used to track what to render on page -- new login form or error
    const [isSubmitted, setIsSubmitted] = useState(false);

    //POST AXIOS & EMAIL AND VALIDATION
    async function handleSubmit(e){
=======
    //POST AXIOS & EMAIL AND VALIDATION
    function handleSubmit(e){
>>>>>>> 5c98f738987ea964d358d8ecf4ce080f8d7b29fa
        e.preventDefault();

        const { first, last, username, password, city, state, email, account } = document.forms[0];

<<<<<<< HEAD
        console.log(first.value);
        console.log(last.value);
        console.log(username.value);
        console.log(password.value);

=======
>>>>>>> 5c98f738987ea964d358d8ecf4ce080f8d7b29fa
        const emailFormat =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        //VALIDATOR & CHECK ALL FIELDS FILLED
<<<<<<< HEAD

        if (!email.value.trim() || !email.value.match(emailFormat)){
            setErrorMessages({ name: "email", message: errors.email });

        }
=======
        
        if (!email.value.trim() || !email.value.match(emailFormat)){
            setErrorMessages({ name: "email", message: errors.email });
        
        } 
>>>>>>> 5c98f738987ea964d358d8ecf4ce080f8d7b29fa

        //check that username is not only whitespace
        if (!username.value.trim()) {

            setErrorMessages({ name: "uname", message: errors.uname });

        } else {

            //check if username is in database
<<<<<<< HEAD
            axios.get(`http://localhost:4000/userByName/${username.value}`).then((res)=>{

                const existingUser = res.data;

                console.log(existingUser);

                if (existingUser) {
                    //username in system - check if returning user
                    if (existingUser.password === password.value) {
                        setIsSubmitted(true);
=======
            axios.get(`http://localhost:4000/users/userByName/${username.value}`).then((res)=>{

                const existingUser = res.data;

                if (existingUser) {
                    //username in system - check if returning user
                    if (existingUser.password === password.value) {

>>>>>>> 5c98f738987ea964d358d8ecf4ce080f8d7b29fa
                        props.setShowSignup(false);

                        //PASS DATA RECIEVED FROM AXIOS CALL TO SETUSER
                        setUser(existingUser);

                    } else {
<<<<<<< HEAD
                        setErrorMessages({ name: "unameused", message: errors.unameused });
                    }
                } else {
                    // new user
                    console.log(document.forms[0]);
                    //await axios.post(document.forms[0]);

                    setIsSubmitted(true);
                    props.setShowSignup(false);
                }
            })
        }
=======
                        //username taken
                        setErrorMessages({ name: "unameused", message: errors.unameused });

                    }
                } else {
                    // new user
                    const newUser = {
                        firstname:first.value, 
                        lastname:last.value, 
                        username:username.value, 
                        password:password.value, 
                        city:city.value, 
                        state:state.value, 
                        email:email.value, 
                        account:account.value
                    }
                    axios.post(`http://localhost:4000/users/newUser`,newUser).then((res)=>{

                        props.setShowSignup(false);
                        newUser.userid = res.userid;

                        setUser(newUser);
                    });
                }
            })
        }  
>>>>>>> 5c98f738987ea964d358d8ecf4ce080f8d7b29fa
    }

    function renderErrorMessage(name) {
        if (name === errorMessages.name) {
            return (<div className="error">{errorMessages.message}</div>);
        }
    }

    function changeForm() {
        props.setShowLogin(true);
        props.setShowSignup(false);
    }

    const renderForm = (
        <Modal
            show={props.showSignup}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form onSubmit={handleSubmit}>
                <Modal.Header bsPrefix="formheading">
                    <h3>Sign Up</h3>
                    <div className="formbuttons">
                        <button className="unselectedbutton" onClick={changeForm}>
                            Sign In
                        </button>
                        <button className="selectedbutton">
                            Sign Up
                        </button>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Enter first name: </Form.Label>
                        <Form.Control type="text" name="first" placeholder="first name" required />
<<<<<<< HEAD
                        {renderErrorMessage("name")}
=======
                        {renderErrorMessage("fullname")}
>>>>>>> 5c98f738987ea964d358d8ecf4ce080f8d7b29fa
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter last name: </Form.Label>
                        <Form.Control type="text" name="last" placeholder="last name" required />
<<<<<<< HEAD
                        {renderErrorMessage("name")}
=======
                        {renderErrorMessage("fullname")}
>>>>>>> 5c98f738987ea964d358d8ecf4ce080f8d7b29fa
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter username: </Form.Label>
                        <Form.Control type="text" name="username" placeholder="username" required />
<<<<<<< HEAD
                        {renderErrorMessage("uname")}
=======
                        {renderErrorMessage("unameused")}
>>>>>>> 5c98f738987ea964d358d8ecf4ce080f8d7b29fa
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter password: </Form.Label>
                        <Form.Control type="password" name="password" placeholder="password" required />
                        {renderErrorMessage("pass")}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter city: </Form.Label>
                        <Form.Control type="text" name="city" placeholder="city" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter state: </Form.Label>
                        <Form.Select aria-label="Choose state" name="state">
                            <option>Select state</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CN">Connecticut</option>
                            <option value="DE">Deleware</option>
                            <option value="FL">Florida</option>
                            <option value="GE">Georgia</option>
                            <option value="HA">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KT">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NB">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PE">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter email: </Form.Label>
                        <Form.Control type="email" name="email" placeholder="email" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Position: </Form.Label>
                        <Form.Select aria-label="Choose position" name="account">
                            <option>Select position</option>
                            <option value="associate">Associate</option>
                            <option value="admin">Admin</option>
                        </Form.Select>
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

<<<<<<< HEAD
    return (isSubmitted ? "" : renderForm);
};

export default Signup;
=======
    return (user ? "" : renderForm);
};

export default Signup;
>>>>>>> 5c98f738987ea964d358d8ecf4ce080f8d7b29fa
