import React, {useState} from 'react';
import AdminNavbar from "../AdminNavbar";

const UserPanel = () => {

    //GET ALL BUTTON TOGGLE
    const [showUser, setShowUser] = useState(false);

    return (
        <>
            {/*IMPORTING ADMIN NAVBAR*/}
            <AdminNavbar/>

            <section id="adminSection" className="adminBackground fade-in-animation">

                {/*FLEX AND WRAPPER CONTENT CLASS*/}
                <div id="admin-wrapper" className="d-flex flex-column adminBody">

                    {/*HEADER TITLE*/}
                    <div className="d-sm-flex align-items-center justify-content-center mb-4">
                        <h1 className="text-center">User Panel</h1>
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
                                                    Total Users :
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
                                                    Total Associates :
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
                                                    Total Admin :
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
                                                    Get All Current Users :
                                                </div>
                                                {/*<div className=" text-center h5 mb-0 font-weight-bold text-gray-800">*/}
                                                {/*    (Take from from DS)*/}
                                                {/*</div>*/}
                                                <div className="text-center mt-5">
                                                    <button
                                                        className="mainStyle"
                                                        role="button"
                                                        type="submit"
                                                        onClick={() => setShowUser(prevState => !prevState)}
                                                    >

                                                    </button>

                                                    {/*ALL RETRIEVED DATA GOES HERE*/}
                                                    {/*TOGGLE APPLIED*/}
                                                    { showUser &&

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
                                                    User Graph :
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


                        {/*REPORT USER*/}
                        {/*COL FOR CARD*/}
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    {/*CARD ROW*/}
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="fact-body">
                                                <div className="text-center text-xs font-weight-bold text-uppercase">
                                                    Report Users :
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800 mb-3">
                                                    Table has the following pending reported Users
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800">

                                                    {/*A PLACE HOLDER FOR THE REAL CONTENT*/}
                                                    <div className="row">
                                                        <table>
                                                            <thead>
                                                                <th className="col-2">Id</th>
                                                                <th className="col-2">User</th>
                                                                <th className="col-2">Complaint</th>
                                                                <th className="col-2">Ignore</th>
                                                                <th className="col-2">Ban</th>
                                                            </thead>
                                                        </table>
                                                    </div>

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

export default UserPanel;

