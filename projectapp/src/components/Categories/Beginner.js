import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../navbar/Navbar";
const Beginner = () => {

    const [showBeginnerContent, setShowBeginnerContent] = useState([]);
    const [showContent, setShowContent] = useState([])

    async function getBeginnerContent() {
        await axios.get(`http://localhost:4000/categories/getcontentbycategoryid/3`)
            .then((response) => {
                setShowBeginnerContent(response.data);
                console.log(response);

            });
    }

    useEffect(() => {

        getBeginnerContent();

    }, []);


    return (
        <>

            <Navbar/>
            <>

                <h1 className="category-title text-center">Beginer content</h1>

                {
                    showBeginnerContent.map((item, index) => {
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

export default Beginner;
