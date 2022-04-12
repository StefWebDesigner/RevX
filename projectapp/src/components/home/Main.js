import Header from "../navbar/Header";
import PostInput from '../posts/PostInput';
import React, {useState} from 'react';
import axios from "axios";
import Survey from "../Survey/Survey";

const Main = () => {


    return (
        <>
            <Header />
            <PostInput />
            <Survey/>
        </>
    );
};

export default Main;
