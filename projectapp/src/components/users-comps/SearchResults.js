import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card, Col, FormControl, FormSelect, InputGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Navbar from "../navbar/Navbar";

const SearchResults = () => {

    // TO RETRIEVE SEARCHED CONTENT FROM PERSISTANCE LATER
    const [retrieveInfo, setRetrieveInfo] = useState([]);
    const [filteredResults, setFilterResults] = useState([])
    const [search, setSearch] = useState('');
    const [searchCategory, setSearchCategory] = useState('Username')
    const [showNotFound, setShowNotFound] = useState(false)

    //SEARCHING FOR INPUT WITH SEARCHVALUE
    function searchResultsUsername(searchValue) {

        axios.get(`http://localhost:4000/users/userByNameSearch/${searchValue}`)

            .then((response) => {

                setRetrieveInfo(response.data);
                console.log(response.data)

                //ERROR POINT HERE
                if (response.data.length == 0) {
                    setShowNotFound(true)
                } else {
                    setShowNotFound(false)
                }
            })
    }

    //SEARCHING FOR LOCATOIN BASED ON SEARCHVALUE
    function searchResultsLocation(searchValue) {

        axios.get(`http://localhost:4000/users/userByLocation/${searchValue}`)

            .then((response) => {
                setRetrieveInfo(response.data);
                if (response.data.length == 0) {
                    setShowNotFound(true)
                } else {
                    setShowNotFound(false)
                }
            })
    }

    return (
        <>
            <section>
                <Navbar/>
            </section>

            <section>
                {/*<Row>*/}
                    <div className="d-flex">
                    <InputGroup>
                        <FormSelect
                            className="searchPromptField searchField"
                            onChange={(e) => {
                                console.log(e.target.value)
                                //BY SELECTED DROP DOWN OPTION, THE VALUE IS SET FOR THE FOLLWING PART
                                setSearchCategory(e.target.value);
                            }}>
                            //BUTTON SEARCH OPTIONS
                            <option>Username</option>
                            <option>Location</option>
                        </FormSelect>
                    </InputGroup>
                    <InputGroup>
                        <FormControl
                            placeholder="Search..."
                            classname="searchField"
                            onChange={(e) => {
                                console.log(e.target.value);
                                setSearch(e.target.value)
                            }}
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <button
                        className="searchPromptField searchbutton"
                            onClick={() => {
                                console.log(searchCategory)
                                if (searchCategory == "Username") {
                                    searchResultsUsername(search)

                                }
                                if (searchCategory == "Location") {
                                    searchResultsLocation(search)
                                }
                            }}>
                            Search
                    </button>
                        </div>
                {/*</Row>*/}

                {/*//OUTPUT FOR NO RESULTS*/}
                {showNotFound && (<div><p>No results</p></div>)}

                {/*//OUTPUT OF THE REQUESTS*/}
                {retrieveInfo.map(data => (
                    <div key={data.id}>

                        <div className="userprofileContainer">
                                <div className="userprofileContent">
                                    <h1 className="userprofileTitle">Your Results</h1>

                                    <Link to={`/userprofile/${data.username}`}>
                                        <p className="userprofileSubtitlte">{data.username}</p>
                                    </Link>

                                    <p className="userprofileElements">Click to view profile</p>
                                </div>
                            <div className="color-line">
                                <span className="color-line-1"></span>
                            </div>
                        </div>


                    </div>
                ))
                }
            </section>

        </>
    )

}

export default SearchResults;