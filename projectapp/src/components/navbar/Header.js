import React from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';

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
                            <i className="fa-solid fa-magnifying-glass fa-inverse icon"></i>
                            <input type="text" className="form-control" placeholder="Search..." />
                        </Col>
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;