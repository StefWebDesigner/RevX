import React, {useEffect, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RiPencilLine } from "react-icons/ri";
import axios from "axios";
import Header from '../navbar/Header';
import Navbar from '../navbar/Navbar';
import DataContext from "../../dataStore/dataStore";
import ProfilePost from '../posts/ProfilePost';

const UserProfile = ({username}) => {

    //CALLING IN DATASTORE -> USED FOR NAV BAR CONDITION STATEMENT
    const { user, setUser } = useContext(DataContext);

    const [profile, setProfile] = useState({});
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/users/userByName/${username}`)
            .then((response) => {

                if(response.data){
                
                    setProfile(response.data);

                    axios.get(`http://localhost:4000/posts/PostByUser/${response.data.userid}`)
                        .then((res) => {
                            setPosts(res.data);
                        })
                }
            })
    }, [username]);

    //console.log(profile);
    
    const pageContent = (
        <Container className="account-page">
            {/* User Profile Information */}
            <Row className="justify-content-md-center mb-4">
                <Col xs="auto">
                    <img src={"../../../images/" + (profile.pic ? profile.pic : "user-badge-purple.svg")}
                        className="account-pic" alt="User Avatar" />
                </Col>
                <Col md={6}>
                    <Card >
                        <Card.Header bsPrefix='account-heading'>
                            <h1>{profile.firstname} {profile.lastname}</h1>
                            <span className='account-handle'> @{profile.username}</span>

                            {user.userid === profile.userid ? 
                                <button 
                                    type="button" 
                                    className="editbtn" 
                                    onClick={() => navigate('/editAccount')}>
                                    <RiPencilLine />
                                </button> 
                                : ""
                            }

                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <p><b>Position:</b> {profile.account}</p>
                            </Row>
                            <Row>
                                <p><b>Location:</b> {profile.city}, {profile.state}</p>
                            </Row>
                            <Row>
                                <p><b>Contact:</b> {profile.email}</p>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* User Posts */}
            <Row className="justify-content-md-center">
                <Col>
                    <h3 className='text-center'>Posts</h3>
                    {posts?
                        posts.map((post) => {
                        return (
                            <ProfilePost key={post.postid} profile={profile} post={post} />
                            );
                        })
                    : <p>This user has no posts.</p>}
                </Col>
            </Row>
        </Container>
    );

    const noProfile = (<h2 className="text-center">User has been deactivated</h2>);

    return ( 
    <>
        <Header />
        <Navbar />
        {profile ? pageContent : noProfile}
    </>);
};

export default UserProfile;
