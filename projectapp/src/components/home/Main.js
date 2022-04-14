import Header from "../navbar/Header";
import PostInput from '../posts/PostInput';
import PostFeed from '../posts/PostFeed';
import React, { useContext, useState } from 'react';
import DataStore from "../../dataStore/dataStore";


const Main = () => {

    //CALL THE DATASTORE GLOBAL VARIABLE FROM STORE
    const { user } = useContext(DataStore);
    const [createNewPost, setCreateNewPost] = useState(null);

    return (
        <>
            <Header />
            <PostInput setCreateNewPost={setCreateNewPost}/>
            {user ? <PostFeed newPost={createNewPost}/> : ""}
            {/* <Survey/> */}
        </>
    );
};

export default Main;
