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
{/*                        <Col >*/}
{/*                           <Link to='/searchResults'>Search page</Link>*/}
{/*//                             <InputGroup>*/}
{/*//                                 <InputGroup.Text bsPrefix="search-icon">*/}
{/*//                                     <img src="../../../images/mg-white.svg" className="icon" alt=""/>*/}
{/*//                                 </InputGroup.Text>*/}
{/*//                                 <Form.Select id="searchtype" bsPrefix="search" defaultValue={"name"}>*/}
{/*//                                     <option value="name">Name</option>*/}
{/*//                                     <option value="location">Location</option>*/}
{/*//                                 </Form.Select>*/}
{/*//                                 <FormControl*/}
{/*//                                     placeholder="Search..."*/}
{/*//                                      onChange={(e) => searchResults(e.target.value)}*/}

{/*//                                     aria-label="Search"*/}
{/*//                                     aria-describedby="basic-addon2"*/}
{/*// //                                 />*/}
{/*//                             </InputGroup>*/}
{/*                                <InputGroup.Text ><img src="../../../images/mg-black.svg" className="icon" alt=""/></InputGroup.Text>*/}

{/*                                <FormSelect onChange={(e)=>{*/}
{/*                                    console.log(e.target.value)*/}
{/*                                    //BY SELECTED DROP DOWN OPTION, THE VALUE IS SET FOR THE FOLLWING PART*/}
{/*                                    setSearchCategory(e.target.value);*/}
{/*                               }}>*/}
{/*                                    //BUTTON SEARCH OPTIONS*/}
{/*                                    <option>Username</option>*/}
{/*                                    <option>Location</option>*/}
{/*                                </FormSelect>*/}
{/*                                <FormControl*/}
{/*                                    placeholder="Search..."*/}
{/*                                    // LOOK FOR CHANGE AND IT TO SEARCH FOR BUTTON TO ACCESS*/}
{/*                                     onChange={(e) => {*/}

{/*                                         setSearch(e.target.value)*/}
{/*                                     }}/>*/}
{/*                            <button onClick={()=>{*/}
{/*                                //MATCHING WITH CONDITIONS & APPLY SEARCH STATE TO REULTS*/}
{/*                                console.log(searchCategory)*/}
{/*                                if(searchCategory==="Username"){*/}
{/*                                    searchResultsUsername(search)*/}

{/*                                }*/}
{/*                                if(searchCategory==="Location"){*/}
{/*                                searchResultsLocation(search)*/}
{/*                                }*/}
{/*                            }}>Search</button>*/}
{/*                        </Col>*/}
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