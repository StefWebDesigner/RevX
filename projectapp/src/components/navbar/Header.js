import React, {useContext, useEffect, useState} from 'react';
import {Container, Navbar, Row, Col, InputGroup, FormControl, Card} from 'react-bootstrap';
import DataStore from "../../dataStore/dataStore";
import axios from "axios";

function Header() {

    //CALL THE DATASTORE GLOBAL VARIABLE FROM STORE
    const { user } = useContext(DataStore);

    //TO RETRIEVE SEARCHED CONTENT FROM PERSISTANCE LATER
    const [getSearch, setGetSearch] = useState([]);


    async function searchUser(e) {
        e.preventDefault();

        const data = await axios.get('http://localhost:4000/users/userByName/username');
            console.log(data);
        setGetSearch(data.data);
    }



    useEffect(async () => {
        await searchUser()

    }, [])



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
                    <Row>
                        <Card>
                            <Card.Body itemsPerRow={3} style={{marginTop: 20}}>
                                {
                                    getSearch.map((results) => {
                                        return (
                                            <Card>
                                                <Card.Content>
                                                    <Card.Header>
                                                        {results.username}
                                                    </Card.Header>
                                                    <Card.Description>
                                                        {results.location}
                                                    </Card.Description>
                                                </Card.Content>
                                            </Card>
                                        );
                                    })
                                }


                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;