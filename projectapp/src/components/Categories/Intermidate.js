import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../navbar/Navbar";
const Intermidate = () => {

    const [showIntermidateContent, setShowIntermidateContent] = useState([]);

    async function getIntermediateContent() {
        await axios.get(`http://localhost:4000/categories/getcontentbycategoryid/4`)
            .then((response) => {
                setShowIntermidateContent(response.data);
                console.log(response);
            });
    }

    useEffect(() => {

        getIntermediateContent();

    }, []);
    return (
        <>

            <Navbar/>
            <>

                <h1 className="category-title">Intermediate content</h1>

                {
                    showIntermidateContent.map((item, index) => {
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

export default Intermidate;
