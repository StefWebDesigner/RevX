import React, {useContext} from 'react';
import { Container, Navbar, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import DataStore from "../../dataStore/dataStore";

function Header() {

    //CALL THE DATASTORE GLOBAL VARIABLE FROM STORE
    const { user } = useContext(DataStore);

    return(
        <Navbar bg="dark" sticky="top">
            <Navbar.Collapse className="justify-content-end">
                <Container fluid className="headertext">
                    <Row>
                        <Col></Col>
                        <Col xs={4}>{user ? <h4>Welcome, {user.firstname}</h4> : <h4>Welcome</h4>}</Col>
                        <Col></Col>
                        <Col >
                            <InputGroup>
                                <InputGroup.Text><img src="../../../images/mg-black.svg" className="icon" alt=""/></InputGroup.Text>
                                <FormControl
                                    placeholder="Search..."
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;