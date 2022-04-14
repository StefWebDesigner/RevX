import React, {useContext, useEffect, useState} from 'react';
import {Container, Navbar, Row, Col, InputGroup, FormSelect, FormControl, Card} from 'react-bootstrap';
import DataStore from "../../dataStore/dataStore";
import axios from "axios";
import {Link} from "react-router-dom";


function Header() {

    //CALL THE DATASTORE GLOBAL VARIABLE FROM STORE
    const { user } = useContext(DataStore);

    // TO RETRIEVE SEARCHED CONTENT FROM PERSISTANCE LATER
    const [retrieveInfo, setRetrieveInfo] = useState(null);
    const [filteredResults, setFilterResults] = useState([])
    const[search, setSearch] = useState('');


    const searchResultsUsername = (searchValue) => {
        setSearch(searchValue);

        // axios.get(`http://localhost:4000/users/userByName/${searchValue}`)

        axios.get(`http://localhost:4000/users/userByName/${searchValue}`)

            .then((response) => {
                setRetrieveInfo(response.data);
            })
    }
    console.log(retrieveInfo);

    //MY BEST AND FASTEST SOLUTION & A NEW REQUEST FOR CITY
    const searchResultsLocation = (searchValue) => {
        setSearch(searchValue);

        // axios.get(`http://localhost:4000/users/userByName/${searchValue}`)

        axios.get(`http://localhost:4000/users/userByName/${searchValue}`)

            .then((response) => {
                setRetrieveInfo(response.data);
            })
    }

    return(
        <Navbar bg="dark" sticky="top">
            <Navbar.Collapse className="justify-content-end">
                <Container fluid className="headertext">
                    <Row>
                        <Col></Col>
                        <Col xs={4}>{user ? <h4>Welcome, {user.firstname}</h4> : <h4>Welcome</h4>}</Col>
                    {/*<Following/>*/}
                        <Col >
                            <InputGroup>
                                <InputGroup.Text><img src="../../../images/mg-black.svg" className="icon" alt=""/></InputGroup.Text>
                                <FormSelect>
                                    <option>Username</option>
                                    <option>Location</option>
                                </FormSelect>
                                <FormControl
                                    placeholder="Search..."
                                     onChange={(e) => searchResultsUsername(e.target.value)}
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Text><img src="../../../images/mg-black.svg" className="icon" alt=""/></InputGroup.Text>
                                <FormControl
                                    placeholder="Search..."
                                    onChange={(e) => searchResultsLocation(e.target.value)}
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>

                        {retrieveInfo &&

                            <Link to={`/userprofile/${retrieveInfo?.username}`}>
                            {/*NORMALLY IT IS NULL, TI LOOKS FOR A SPECIFIC VALUE*/}
                                <h4 style={{color: "white"}} >
                        {retrieveInfo?.username}
                                </h4>
                        {/*        <h4 style={{color: "white"}} >*/}
                        {/*{retrieveInfo?.city}*/}
                        {/*        </h4>*/}
                            </Link>

                        }



                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;