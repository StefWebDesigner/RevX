import React, {useState} from 'react';
import AdminNavbar from "../AdminNavbar";
import axios from "axios";


const ContentPanel = () => {


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
                                                    (Take from from DS)
                                                    - Add three sorting buttons
                                                </div>
                                                <div className="text-center mt-5">
                                                    <button
                                                        className="mainStyle"
                                                        role="button"
                                                        type="submit"
                                                        onClick={() => setShowPost(prevState => !prevState)}
                                                    >

                                                    </button>

                                                    {/*ALL RETRIEVED DATA GOES HERE*/}
                                                    {/*TOGGLE APPLIED*/}
                                                    { showPost &&

                                                        <aside>
                                                            <div className="fade-in-animation">
                                                                {/* WILL CREATE THE  LIST HERE*/}


                                                                {/*    add toggle like in show product*/}
                                                                {/*    add for name / id / and ect sorting button here   */}


                                                            </div>
                                                        </aside>
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
                        <div className="col-xl-12 col-lg-12 col-md-12">
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
                                                            <div className="col-xl-2 col-lg-2 col-md-2">
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
                                                            <div className="col-xl-2 col-lg-2 col-md-2">
                                                                <label
                                                                    className="text-center"
                                                                > Enter a title:
                                                                </label>
                                                                <input
                                                                    className=" text-center"
                                                                    name="postTitle"
                                                                    value={postContent.postTitle}
                                                                    type="text"
                                                                    placeholder="Enter a title"
                                                                    onChange={handlePosts}
                                                                    required
                                                                />
                                                            </div>
                                                    {/* END DIV TAG FOR TITLE & GENRE */}
                                                    </div>

                                                        <label
                                                            className="text-center"
                                                        > Enter some content: </label>
                                                        <input
                                                            className="postInputField text-center"
                                                            name="postBody"
                                                            value={postContent.postBody}
                                                            type="text"
                                                            placeholder="Enter content in the body"
                                                            onChange={handlePosts}
                                                            required
                                                        />

                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <button
                                                                    className="mainStyle"
                                                                    role="button"
                                                                    type="submit"
                                                                >
                                                                </button>
                                                            </div>
                                                        </div>
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
                    </div>


                    <div className="row">

                        {/*GRAPH*/}
                        {/*COL FOR CARD*/}
                        <div className="col-xl-6 col-lg-6 col-md-6">
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
                                                    (Take from from DS) - pie chart of all generes
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                    {/*<UsersChart/>*/}
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
