import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";

const UserProfile = () => {

    const {username} = useParams();

    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/users/userByName/${username}`)
            .then((response) => {
                setUserProfile(response.data);
            })
    }, [])


    console.log(userProfile);

    return (
        <>

            <h1> USername {username}</h1>

        </>
    );
};

export default UserProfile;
