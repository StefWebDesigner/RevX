import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../navbar/Navbar";
const Java = () => {

    // const {categoryid} = useParams();

    const [showJavaContent, setShowJavaContent] = useState([]);
    const [showContent, setShowContent] = useState([])

    async function getJavaContent() {
        await axios.get(`http://localhost:4000/categories/getcontentbycategoryid/1`)
            .then((response) => {
                setShowJavaContent(response.data);
                console.log(response);


                getJavaContent()

            });
        // getJavaContent()

    }

    useEffect(() => {

        getJavaContent();

    }, []);


    return (
        <>


            <Navbar/>
            <div>

                <h1 className="text-center">Java content</h1>

                {
                    showJavaContent.map((java, index) => {
                        return(
                            <div className="category-container text-center">

                                {/* link to user profile */}
                                <span className="category-subtitle">{java.title}</span>

                                {/* Post body content */}
                                <div className="category-content">
                                    <p>{java.mainbodycontent}</p>
                                </div>
                                <div className="color-line">
                                    <span className="color-line-1"></span>

                                </div>
                            </div>
                        )
                    })
                }


            </div>


            {/*<div className="post-container">*/}


            {/*    /!* link to user profile *!/*/}
            {/*    <span>{java.title}</span>*/}

            {/*    /!* follow button *!/*/}

            {/*    /!* Post body content *!/*/}
            {/*    <div className="post-content">*/}
            {/*        <p>{java.mainbodycontent}</p>*/}
            {/*    </div>*/}



            {/*</div>*/}






        </>
    );
};

export default Java;
