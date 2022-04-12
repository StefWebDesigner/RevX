import React from 'react';
import {Link} from "react-router-dom";

const Survey = () => {
    return (
        <>
            <section>
                <h4 className="text-center">Let us know your thought today!</h4>
                {/*<div className="suveryBackground">*/}
                <div className="d-flex justify-content-center">
                    <Link to="/surveyform" className="suveryTitle text-center">
                            <h4 className=" text-center">Survey</h4>
                    </Link>
                </div>
                {/*</div>*/}
            </section>

        </>
    );
};

export default Survey;
