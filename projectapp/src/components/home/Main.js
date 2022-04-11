import Header from "../navbar/Header";
import PostInput from '../posts/PostInput';
import React, {useState} from 'react';
import axios from "axios";

const Main = () => {


    return (
        <>
            <Header />
            <PostInput />
        </>
    );
};

export default Main;
