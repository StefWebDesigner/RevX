import React, {useEffect, useState} from 'react';
import axios from "axios";

const UserProfile = ({username}) => {

    let profile = {};

    useEffect(() => {
        axios.get(`http://localhost:4000/users/userByName/${username}`)
            .then((response) => {
                profile = response.data;
            })
    }, [])

    console.log(profile);

    return (
        <>
            <h1> USername {username}</h1>
            {/*<h1> USername {city}</h1>*/}
        </>
    );
};

export default UserProfile;
