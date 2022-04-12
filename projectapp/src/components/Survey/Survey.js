import React from 'react';
import {Link} from "react-router-dom";

const Survey = () => {
    return (
        <>
            <section>
                <h4 className="text-center">Please Let us know your thought today!</h4>
                <button>
                    <Link to="/survey">
                        <h5 className="">Survey</h5>
                    </Link>
                </button>
            </section>

        </>
    );
};

export default Survey;
