import React from 'react';
import { Container, Navbar, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

function Header() {

    return(
        <Navbar bg="dark">
            <Navbar.Collapse className="justify-content-end">
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col></Col>
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