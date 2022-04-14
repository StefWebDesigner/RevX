import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../navbar/Navbar";
const Beginner = () => {

    const [showBeginnerContent, setShowBeginnerContent] = useState(true);
    const [showContent, setShowContent] = useState([])

    async function getBeginnerContent() {
        await axios.get(`http://localhost:4000/categories/getcontentbycategoryid/3`)
            .then((response) => {
                setShowBeginnerContent(response.data);
                console.log(response);


                // getReactContent()

            });
        // getJavaContent()

    }

    useEffect(() => {

        getBeginnerContent();

    }, []);


    return (
        <>

            <Navbar/>
            <>

                <h1 className="text-center">Beginer content</h1>

                {
                    showBeginnerContent.map((item, index) => {
                        return(
                            <div className="category-container text-center">

                                {/* link to user profile */}
                                <span className="">{item.title}</span>

                                {/* Post body content */}
                                <div className="category-content">
                                    <p>{item.mainbodycontent}</p>
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
