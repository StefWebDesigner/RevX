import React, {useContext, useEffect, useState} from 'react';
import {Container, Navbar, Row, Col, InputGroup, FormSelect, FormControl, Card, Button} from 'react-bootstrap';
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
    const [searchCategory,setSearchCategory]=useState('Username')


    return(
        <Navbar bg="dark" sticky="top">
            <Navbar.Collapse className="justify-content-end">
                <Container fluid className="headertext">
                    <Row>
                        <Col></Col>
                        <Col xs={4}>{user ? <h4>Welcome, {user.firstname}</h4> : <h4>Welcome</h4>}</Col>
                    {/*<Following/>*/}
                        
                        
                    </Row>
                    <Row>

                        {/*//OUTPUT OF THE REQUESTS*/}
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