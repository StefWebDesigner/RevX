import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import {Card, Col, Row} from "react-bootstrap";
import Navbar from "../navbar/Navbar";

const UserProfile = () => {

    //USE PARAM FOR THE LINK
    const {username} = useParams();
    const [userProfile, setUserProfile] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/users/userByName/${username}`)
            .then((response) => {
                setUserProfile(response.data);
            })
    }, [])

    console.log(userProfile);

    return (
        <>
            <section>
                <Navbar/>
            </section>

            <section>
                <Row>
                    <Card>
                        <Card.Header>
                            <h1 className="userprofileTitle">
                                You searched for {username}
                            </h1>
                        </Card.Header>
                    </Card>
                </Row>
                {/*<Row>*/}
                {/*    <Card>*/}
                {/*        <Card.Body>*/}
                {/*        <Col xs={12}>*/}
                {/*            <div className="category-container">*/}
                {/*                <div className="userprofileContent">*/}
                {/*            /!*<img src="{userProfile.pic}">*!/*/}
                {/*                    <h1 className="userprofileSubtitlte">Username : </h1>*/}
                {/*                    <h2 className="userprofileElements">{username}</h2>*/}
                {/*                    <h1 className="userprofileSubtitlte">Firstname : </h1>*/}
                {/*                    <h2 className="userprofileElements">{userProfile.firstname}{userProfile.lastname} </h2>*/}
                {/*                    <h1 className="userprofileSubtitlte">Location : </h1>*/}
                {/*                    <h2 className="userprofileElements"> {userProfile.city}</h2>*/}
                {/*                    <h2 className="userprofileElements">{userProfile.state}</h2>*/}
                {/*                </div>*/}
                {/*                <div className="color-line">*/}
                {/*                    <span className="color-line-1"></span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </Col>*/}
                {/*        </Card.Body>*/}
                {/*    </Card>*/}
                {/*</Row>*/}

            </section>



        </>
    );
};

export default UserProfile;
