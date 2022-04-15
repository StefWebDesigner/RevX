import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../navbar/Navbar";
const ReactFile = () => {

    const [showReactContent, setShowReactContent] = useState([]);
    const [showContent, setShowContent] = useState([])

    async function getReactContent() {
        await axios.get(`http://localhost:4000/categories/getcontentbycategoryid/2`)
            .then((response) => {
                setShowReactContent(response.data);
                console.log(response);


                // getReactContent()

            });
        // getJavaContent()

    }

    useEffect(() => {

        getReactContent();

    }, []);


    return (
        <>

            <Navbar/>
            <>

                <h1 className="text-center">React content</h1>

                {
                    showReactContent.map((item, index) => {
                        return(
                            <div className="category-container text-center">

                                {/* link to user profile */}
                                <span className="category-subtitle">{item.title}</span>

                                {/* Post body content */}
                                <div className="category-content">
                                    <p>{item.mainbodycontent}</p>
                                </div>
                                <div className="color-line">
                                    <span className="color-line-1"></span>

                                </div>
                            </div>
                        )
                    })
                }


            </>

        </>
    );
};

export default ReactFile;
