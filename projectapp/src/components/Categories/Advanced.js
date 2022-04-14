import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../navbar/Navbar";
const Advanced = () => {

    const [showAdvancedContent, setShowAdvancedContent] = useState(true);
    const [showContent, setShowContent] = useState([])

    async function getAdvancedContent() {
        await axios.get(`http://localhost:4000/categories/getcontentbycategoryid/5`)
            .then((response) => {
                setShowAdvancedContent(response.data);
                console.log(response);


                // getReactContent()

            });
        // getJavaContent()

    }

    useEffect(() => {

        getAdvancedContent();

    }, []);


    return (
        <>

            <Navbar/>
            <>

                <h1 className="text-center">Advanced content</h1>

                {
                    showAdvancedContent.map((item, index) => {
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

export default Advanced;
