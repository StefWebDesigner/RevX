import Header from "../navbar/Header";
import PostInput from '../posts/PostInput';
import PostFeed from '../posts/PostFeed';
import React, { useContext } from 'react';
import DataStore from "../../dataStore/dataStore";


const Main = () => {

    //CALL THE DATASTORE GLOBAL VARIABLE FROM STORE
    const { user } = useContext(DataStore);

    return (
        <>
            <Header />
            <PostInput />
            {user ? <PostFeed /> : ""}

        </>
    );
};

export default Main;
