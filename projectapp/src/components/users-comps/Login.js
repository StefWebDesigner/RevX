import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'
import { useContext, useState } from 'react';
import axios from "axios";

import DataStore from "../../dataStore/dataStore";


function Login() {

    //IT CALLS THE DATASTORE GLOBAL VARIABLE FORM STORE
    const { setUser } = useContext(DataStore);

    //controls visibility of modal
    const [isOpen, setIsOpen] = useState(true);

    //potential error messages when validating form
    const [errorMessages, setErrorMessages] = useState({});
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    //used to track what to render on page -- new login form or error
    const [isSubmitted, setIsSubmitted] = useState(false);


    async function handleSubmit(e) {

        e.preventDefault();

        var { username, password } = document.forms[0];

        // const { data } = await axios.get(`http://localhost:4000/userByName/${username}`);
        const data = { username: "morth", password: "password" };
        //validate user information
        if (data) {

            if (data.password === password.value) {
                setIsSubmitted(true);
                setIsOpen(false);

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

    function renderErrorMessage(name) {
        if (name === errorMessages.name) {
            return (<div className="error">{errorMessages.message}</div>);
        }
    }

    const renderForm = (
        <Modal
            show={isOpen}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form onSubmit={handleSubmit}>
                <Modal.Header>
                    <Modal.Title>Sign In</Modal.Title>
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
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );

    return (isSubmitted ? "" : renderForm);
}

export default Login;