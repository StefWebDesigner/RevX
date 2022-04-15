import React, {useContext, useEffect, useState} from 'react';
import {Container, Navbar, Row, Col, InputGroup, Form, FormControl, Card} from 'react-bootstrap';
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


    const searchResults = (searchValue) => {
        setSearch(searchValue);

        const searchType = document.getElementById("searchtype").value;

        if(searchType === 'name' && searchValue.trim()){
        // axios.get(`http://localhost:4000/users/userByName/${searchValue}`)

        axios.get(`http://localhost:4000/users/userByName/${searchValue}`)

            .then((response) => {
                setRetrieveInfo(response.data);
                console.log(response.data);
            })
        } else if (searchType === "location" && searchValue.trim()){
            // axios.get(`http://localhost:4000/users/userByLocation/${searchValue}`)

            //     .then((response) => {
            //         setRetrieveInfo(response.data);
            //         console.log(response.data);
            //     })
        }
    }

    return(
        <Navbar bg="dark" sticky="top">
            <Navbar.Collapse className="justify-content-end">
                <Container fluid className="headertext">
                    <Row>
                        <Col></Col>
                        <Col xs={4}>{user ? <h4>Welcome, {user.firstname}</h4> : <h4>Welcome</h4>}</Col>
                        <Col>
                        {/*    incldue teh folliwng button */}

                        </Col>
                    {/*<Following/>*/}
                        <Col >
                            <InputGroup>
                                <InputGroup.Text bsPrefix="search-icon">
                                    <img src="../../../images/mg-white.svg" className="icon" alt=""/>
                                </InputGroup.Text>
                                <Form.Select id="searchtype" bsPrefix="search" defaultValue={"name"}>
                                    <option value="name">Name</option>
                                    <option value="location">Location</option>
                                </Form.Select>
                                <FormControl
                                    placeholder="Search..."
                                     onChange={(e) => searchResults(e.target.value)}
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