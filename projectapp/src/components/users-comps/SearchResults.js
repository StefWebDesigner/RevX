import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Col, FormControl, FormSelect, InputGroup} from "react-bootstrap";
import {Link} from "react-router-dom";


const SearchResults = ()=>{

    // TO RETRIEVE SEARCHED CONTENT FROM PERSISTANCE LATER
    const [retrieveInfo, setRetrieveInfo] = useState([]);
    const [filteredResults, setFilterResults] = useState([])
    const[search, setSearch] = useState('');
    const [searchCategory,setSearchCategory]=useState('Username')
    const [showNotFound,setShowNotFound]=useState(false)

    //SEARCHING FOR INPUT WITH SEARCHVALUE
    const searchResultsUsername = (searchValue) => {
        axios.get(`http://localhost:4000/users/userByName/${searchValue}`)

            .then((response) => {

                setRetrieveInfo(response.data);
                if(response.data.length==0){
                    setShowNotFound(true)
                }else{
                    setShowNotFound(false)
                }
            })
    }

    //SEARCHING FOR LOCATOIN BASED ON SEARCHVALUE
    const searchResultsLocation = (searchValue) => {

        axios.get(`http://localhost:4000/users/userByLocation/${searchValue}`)

            .then((response) => {
                setRetrieveInfo(response.data);
                if(response.data.length==0){
                    setShowNotFound(true)
                }else{
                    setShowNotFound(false)
                }
            })
    }
    return (
        <div>
            <Col >

            <InputGroup>
                <InputGroup.Text ><img src="../../../images/mg-black.svg" className="icon" alt=""/></InputGroup.Text>

                <FormSelect onChange={(e)=>{
                    console.log(e.target.value)
                    //BY SELECTED DROP DOWN OPTION, THE VALUE IS SET FOR THE FOLLWING PART
                    setSearchCategory(e.target.value);

                }}>
                    //BUTTON SEARCH OPTIONS
                    <option>Username</option>
                    <option>Location</option>
                </FormSelect>
                <FormControl
                    placeholder="Search..."
                    onChange={(e) => {

                        setSearch(e.target.value)
                    }}
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                />

            </InputGroup>

            <button onClick={()=>{
                console.log(searchCategory)
                if(searchCategory=="Username"){
                    searchResultsUsername(search)

                }
                if(searchCategory=="Location"){
                    searchResultsLocation(search)
                }
            }}>Search</button>
        </Col>

            {/*//OUTPUT FOR NO RESULTS*/}
            {showNotFound&&(<div><p>No results</p></div>)}

            {/*//OUTPUT OF THE REQUESTS*/}
            {retrieveInfo.map(data=>(
                <div key={data.id}>
                    <Link to={`/userprofile/${data.username}`}>
                        <p>{data.username}</p>
                    </Link>

                </div>
                ))
            }
        </div>
    )

}
export default  SearchResults;