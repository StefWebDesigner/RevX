import React, {useEffect, useState} from 'react';
import AdminNavbar from "../AdminNavbar";
import axios from "axios";
import ContentChart from "../admincharts/ContentChart";


const ContentPanel = () => {

    const [allPost, setAllPost] = useState([]);

    const [allGenre, setAllGenre] = useState([]);

    const [collectingAllPost, setCollectingAllPost] = useState([]);



    //FORM STATE FOR POST CONTENT
    const [postContent, setPostContent] = useState({
        postTitle: "",
        postBody: "",
        postGenre: ""
    });

    //GET POST TOGGLE STATES
    const [showPost, setShowPost] = useState();

    //POSTING METHOD FOR POST CONTENT
    const SubmitPostContent = async (e) => {
       e.defaultPrevented();

       //POST CALL
       const data = await axios.post('url', postContent);
       console.log(data);

       //RESETS THE CONTENT IN TO THE FORM
       setPostContent({
           postTitle: "",
           postBody: "",
           postGenre: ""
       });
    }
    //POST CONTENT FORM HANDLER
    const handlePosts = (e) => {
        setPostContent({
            ...postContent,
            [e.target.name] : e.target.value,
        });
    };

    //GET ALL POST
    async function getAllPost() {
        const data = await axios.get('http://localhost:4000/posts/getAllPosts');
        setAllPost(data.data);
    }

    //DELETE A POST
    async function deletePost () {
        const data = await axios.delete('http://localhost:4000/posts/deletePost/id');
        console.log(data);
    }



    async function getAllGenre() {
        const data = await axios.get('http://localhost:4000/categories/getAll');
        setAllGenre(data.data);
    }


    async function getAllCollectedPost() {

        const data = await axios.get('http://localhost:4000/posts/getAllPosts');
        setCollectingAllPost(data.data);
    }

    useEffect(() => {

        //CALLING GET ALL USERS & DETAILS
        getAllPost();
        getAllGenre()
        getAllCollectedPost();


    },[]);




    return (
        <>
            {/*IMPORTING ADMIN NAVBAR*/}
            <AdminNavbar/>

            <section id="adminSection" className="adminBackground fade-in-animation">

                {/*FLEX AND WRAPPER CONTENT CLASS*/}
                <div id="admin-wrapper" className="d-flex flex-column adminBody">

                    {/*HEADER TITLE*/}
                    <div className="d-sm-flex align-items-center justify-content-center mb-4">
                        <h1 className="text-center"> Content Panel</h1>
                    </div>

                    {/*OVERALL FACT ROW*/}
                    <div className="row mb-3">

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
                                                    Total Genres :
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                    {allGenre.length}
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
                                                    Total Share :
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
                        {/*OVERALL FACT ROW*/}
                    </div>



                    {/*GET ALL USERS ROW*/}
                    <div className="row mb-3">


                        {/*COL FOR CARD*/}
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    {/*CARD ROW*/}
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="fact-body">
                                                <div className="text-center text-xs font-weight-bold text-uppercase">
                                                    Get All Post :
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800">

                                                    Displays all post currently recorded in database
                                                </div>
                                                <div className="text-center mt-5">
                                                    <button
                                                        className="buttonMainStyle"
                                                        role="button"
                                                        type="submit"
                                                        onClick={() => setShowPost(prevState => !prevState)}
                                                    >
                                                        Show Posts
                                                    </button>

                                                    {
                                                        showPost &&

                                                            <table className="table table-striped table-hover">
                                                        <thead className="text-center">
                                                        <tr>
                                                        <div className="row">
                                                        <div className="col-md-2"><th>Post ID</th></div>
                                                        <div className="col-md-6"><th>Post</th></div>
                                                        <div className="col-md-1"><th>Date</th></div>
                                                        <div className="col-md-2"><th>Like</th></div>
                                                        <div className="col-md-1"><th>Remove</th></div>
                                                        </div>
                                                        </tr>
                                                        </thead>
                                                        </table>
                                                    }

                                                    {
                                                        showPost &&
                                                        collectingAllPost.map((collect, index) => {
                                                            return (
                                                                <div key={collect.postid}>
                                        <table className="table table-striped table-hover">
                                            <tbody className="text-center">
                                            <tr>
                                                <div className="row ">
                                                    <div className="col-md-2"><td>{collect.postid}</td></div>
                                                    <div className="col-md-6"><td>{collect.posttext}</td></div>
                                                    <div className="col-md-1"><td>{collect.postdate}</td></div>
                                                    <div className="col-md-2"><td>{collect.likes}</td></div>
                                                    <div className="col-md-1">
                                                        <button
                                                            onClick={() => deletePost(collect.postid)}
                                                        >
                                                            <i className="bi bi-dash-square">-</i>
                                                        </button>
                                                    </div>

                                                    {/*ENDING DIV FOR TABLE ROW    */}
                                                </div>
                                            </tr>
                                            </tbody>
                                        </table>
                                                                </div>

                                                            );

                                                        })
                                                    }

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
                        <div className="col-xl-8 col-lg-8 col-md-8">
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    {/*CARD ROW*/}
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-md-12 mr-2">
                                            <div className="fact-body">

                                                    <form onSubmit={SubmitPostContent}>
                                                        <div className="d-flex flex-column justify-content-center">
                                                        {/*ROW FOR TITLE AND GENRE*/}
                                                        <div className="row">
                                                            <div className="col-xl-3 col-lg-3 col-md-3">
                                                                {/*SELECT INDIVIDUAL DIV*/}
                                                                <select
                                                                    className="custom-select d-block w-100"
                                                                    name="postGenre"
                                                                    value={postContent.postGenre}
                                                                    onChange={handlePosts}
                                                                    required
                                                                >
                                                                    <option  value="">Choose...</option>
                                                                    <option  value="beginner">Beginner</option>
                                                                    <option value="intermediate">Intermediate</option>
                                                                    <option  value="advanced">Advanced</option>
                                                                    <option value="java">Java</option>
                                                                    <option  value="javascript">Javascript</option>
                                                                    <option value="react">React</option>
                                                                    <option  value="python">Python</option>
                                                                </select>
                                                            {/*END TAGS FOR SELECT OPTIONS    */}
                                                            </div>
                                                            <div className="col-xl-9 col-lg-9 col-md-9">
                                                                <div className="d-flex flex-row justify-content-center">
                                                                    <label
                                                                        className="col-md-3 text-center"
                                                                    > Enter a title:
                                                                    </label>
                                                                    <input
                                                                        className=" col-md-7 text-center"
                                                                        name="postTitle"
                                                                        value={postContent.postTitle}
                                                                        type="text"
                                                                        placeholder="Enter a title"
                                                                        onChange={handlePosts}
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>
                                                    {/* END DIV TAG FOR TITLE & GENRE */}
                                                    </div>

                                                        <label
                                                            className="text-center"
                                                        > Enter some content: </label>
                                                        <textarea
                                                            className="postInputField text-center"
                                                            name="postBody"
                                                            value={postContent.postBody}
                                                            type="text"
                                                            placeholder="Enter content in the body"
                                                            onChange={handlePosts}
                                                            required
                                                        >
                                                        </textarea>

                                                        <div className="row">
                                                            {/*<div className="col-md-12">*/}
                                                                <div className="d-flex justify-content-center">
                                                                <button
                                                                    className="buttonMainStyle"
                                                                    role="button"
                                                                    type="submit"
                                                                >
                                                                    Post
                                                                </button>
                                                                </div>
                                                            </div>
                                                        {/*</div>*/}
                                                        </div>
                                                    </form>











                                                {/*</div>*/}
                                            </div>
                                        </div>
                                        {/*END CARD ROW*/}
                                    </div>
                                </div>
                            </div>
                            {/*COL END*/}
                        </div>
                        {/*OVERALL FACT ROW*/}
                    {/*</div>*/}


                    {/*<div className="row">*/}

                        {/*GRAPH*/}
                        {/*COL FOR CARD*/}
                        <div className="col-xl-4 col-lg-3 col-md-4">
                            <div className="card shadow h-100">
                                <div className="card-body ">
                                    {/*CARD ROW*/}
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="fact-body">
                                                <div className="text-center text-xs font-weight-bold text-uppercase">
                                                    Post Graph :
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                    All Total Post Per Genre
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                    <ContentChart/>
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


                    {/* END OF WRAPPER CONTENT CLASS*/}
                </div>

            </section>





        </>
    );
};

export default ContentPanel;
