import React, {useEffect, useState} from 'react';
import axios from "axios";

const Java = () => {

    // const {categoryid} = useParams();

    const [showJavaContent, setShowJavaContent] = useState(true);
    // const [showContent, setShowContent] = useState([])

    async function getJavaContent() {

        await axios.get(`http://localhost:4000/categories/getcontentbycategoryid/1`)
            .then((response) => {
                setShowJavaContent(response.data);
                console.log(response);
            });
    }

    useEffect(() => {

        getJavaContent()

    }, []);


    return (
        <>
            <div>
            {/*<Navbar/>*/}
            <h1>Java content</h1>

            {
                showJavaContent.map((java, index) => {
                    return(
                        <div key={java.id}>
                            {java.title}
                            {java.mainbodycontent}
                        </div>
                    );

                })};

            }"

            </div>
        </>
    );
};

export default Java;
