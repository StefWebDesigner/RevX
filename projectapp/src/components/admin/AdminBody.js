import React, {useEffect, useState} from 'react';
import axios from "axios";
import ContentChart from "./admincharts/ContentChart";
import SurveryChartRatings from "./admincharts/SurveryChartRatings";

const AdminBody = () => {

    const [allUser, setAllUser] = useState([]);
    const [allPost, setAllPost] = useState([]);


    async function getAllUsers() {
        const data = await axios.get('http://localhost:4000/users/allUsers');
        setAllUser(data.data);
    }

    async function getAllPost() {
        const data = await axios.get('http://localhost:4000/posts/getAllPosts');
        setAllPost(data.data);
    }

    //GET ALL USERS
    useEffect(() => {

        //CALLING GET ALL USERS & DETAILS
        getAllUsers();

        getAllPost();


    },[]);


    return (
        <>
            <section id="adminSection" className="adminBackground fade-in-animation">

                {/*FLEX AND WRAPPER CONTENT CLASS*/}
                <div id="admin-wrapper" className="d-flex flex-column adminBody">

                    {/*HEADER TITLE*/}
                    <div className="d-sm-flex align-items-center justify-content-center mb-4">
                        <h1 className="text-center">Overal Portal Information</h1>
                    </div>

                    {/*OVERALL FACT ROW*/}
                    <div className="row">

                        {/*FACT 1*/}
                        {/*COL FOR CARD*/}
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="card shadow h-100">
                                <div className="card-body purple-text-tag">
                                    {/*CARD ROW*/}
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="fact-body">
                                                <div className="text-center text-xs font-weight-bold text-uppercase">
                                                    Total Users :
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800">

                                                    {allUser.length}

                                                </div>
                                            </div>
                                        </div>
                                        {/*END CARD ROW*/}
                                    </div>
                                </div>
                            </div>
                            {/*COL END*/}
                        </div>

                        {/*FACT 2*/}
                        {/*COL FOR CARD*/}
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="card shadow h-100">
                                <div className="card-body purple-text-tag">
                                    {/*CARD ROW*/}
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="fact-body">
                                                <div className="text-center text-xs font-weight-bold text-uppercase">
                                                    Total Posts :
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                    {allPost.length}
                                                </div>
                                            </div>
                                        </div>
                                        {/*END CARD ROW*/}
                                    </div>
                                </div>
                            </div>
                            {/*COL END*/}
                        </div>

                        {/*FACT 1*/}
                        {/*COL FOR CARD*/}
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="card shadow h-100">
                                <div className="card-body purple-text-tag">
                                    {/*CARD ROW*/}
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="fact-body">
                                                <div className="text-center text-xs font-weight-bold text-uppercase">
                                                    Amount of Surveys :
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                    (Take from from DS)
                                                </div>
                                            </div>
                                        </div>
                                        {/*END CARD ROW*/}
                                    </div>
                                </div>
                            </div>
                            {/*COL END*/}
                        </div>

                        <div className="row mb-3">


                            {/*COL FOR CARD*/}
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="card shadow h-100">
                                    <div className="card-body">
                                        {/*CARD ROW*/}
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="fact-body">
                                                    <div
                                                        className="text-center text-xs font-weight-bold text-uppercase">
                                                        Get All Post :
                                                    </div>
                                                    <div
                                                        className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                        (Take from from DS)
                                                        - Add three sorting buttons
                                                    </div>
                                                    <div className="text-center mt-5">
                                                        <button
                                                            className="buttonMainStyle"
                                                            role="button"
                                                            type="submit"
                                                            // onClick={() => setShowPost(prevState => !prevState)}
                                                        >
                                                            Show Posts
                                                        </button>

                                                        {/*ALL RETRIEVED DATA GOES HERE*/}
                                                        {/*TOGGLE APPLIED*/}


                                                    </div>
                                                </div>
                                            </div>
                                            {/*END CARD ROW*/}
                                        </div>
                                    </div>
                                </div>
                                {/*COL END*/}
                            </div>
                            {/*OVERALL FACT ROW*/}
                        </div>


                        {/*POST CONTENT SECTION*/}
                        <div className="row mb-3">


                            {/*COL FOR CARD*/}
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="card shadow h-100">
                                    <div className="card-body ">
                                        {/*CARD ROW*/}
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="fact-body">
                                                    <div
                                                        className="text-center text-xs font-weight-bold text-uppercase">
                                                        Post Graph :
                                                    </div>
                                                    <div
                                                        className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                        All Total Post Per Genre
                                                    </div>
                                                    <div
                                                        className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                        <SurveryChartRatings/>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*END CARD ROW*/}
                                        </div>
                                    </div>
                                </div>
                                {/*COL END*/}
                            </div>


                            {/*<div className="row">*/}

                            {/*GRAPH*/}
                            {/*COL FOR CARD*/}
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="card shadow h-100">
                                    <div className="card-body ">
                                        {/*CARD ROW*/}
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="fact-body">
                                                    <div
                                                        className="text-center text-xs font-weight-bold text-uppercase">
                                                        Post Graph :
                                                    </div>
                                                    <div
                                                        className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                        All Total Post Per Genre
                                                    </div>
                                                    <div
                                                        className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                        <SurveryChartRatings/>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*END CARD ROW*/}
                                        </div>
                                    </div>
                                </div>
                                {/*COL END*/}
                            </div>

                            {/*OVERALL FACT ROW*/}
                        </div>


                        {/*OVERALL FACT ROW*/}
                    </div>

                    <h1>Going to add the survey chart here</h1>


                    {/* END OF WRAPPER CONTENT CLASS*/}
                </div>

            </section>

        </>
    );
};

export default AdminBody;
