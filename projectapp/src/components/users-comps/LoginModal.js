import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'
import {useState} from 'react';


function LoginModal() {

    const [isOpen, setIsOpen] = useState(true);

    openModal = () => setIsOpen(true);
    closeModal = () => setIsOpen(false);

    function handleSubmit(e) {
        e.preventDefault();

        var { username, password } = document.forms[0];

        axios.get(`http://localhost:4000/userByName/${username}`).then( (res) => {

            const data = res.data;

            //validate user information
            if (data) {

                if (data.password === password.value) {
                    //setIsSubmitted(true);

                    //PASS DATA RECIEVED FROM AXIOS CALL TO SETUSER
                    //setUser(data);

                } else {
                    // Invalid password
                   // setErrorMessages({ name: "pass", message: errors.pass });
                }
            } else {
                // Username not found
                //setErrorMessages({ name: "uname", message: errors.uname });
            }
        })
    }

    const renderForm = (
            <>
                <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "100vh" }}
                ></div>

                <Modal 
                    show={isOpen} 
                    onHide={setIsOpen(false)}
                    backdrop="static"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group >
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="text" onChange={this.handleChange} value={this.state.name} placeholder="name input"/>           
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={() => handleSubmit(e)}>
                            Submit
                        </Button>
                    </Modal.Footer>

                </Modal>
            </>
    );

    return (
        <div>
            {isOpen ? renderForm : null}
        </div>
    )
}