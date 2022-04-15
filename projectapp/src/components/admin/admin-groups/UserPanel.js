import React, {useEffect, useState} from 'react';
import AdminNavbar from "../AdminNavbar";
import axios from "axios";
import UsersChart from '../admincharts/UsersChart';

const UserPanel = () => {

    //GET ALL REQUEST
    const [allUser, setAllUser] = useState([]);
    //THE ORIGINAL STATE
    const [users, setUsers] = useState([]);
    //THE TOGGLE
    const [toggleAllUsers, setToggleAllUsers] = useState(false);
    //GET TOTAL ASOCIATE COUNT
    const [associateCount,setAssociateCount]=useState([])
    //GET TOTAL ADMIN ACCOUNT
    const [adminCount, setAdminCount] = useState([]);

    //STATE FOR SORTING BY ID
    const [sortById, setSortById] = useState(false);
    const [sortByUsername, setSortByUsername] = useState(false);
    const [sortByRole, setSortByRole] = useState(false);

    const [getReport, setGetReport] = useState([]);


    //RETREIVE ALL USERS AND SHOW ALL THEIR DETAILS
    async function getAllUsers() {
        const data = await axios.get('http://localhost:4000/users/allUsers');
        setAllUser(data.data);
        setUsers(data.data);
    }

    //SORTING BY ID
    const sortingById = () => {

        const newData = users.sort((a, b) => {
                if(a.userid > b.userid) {
                    return 1;
                }
                if(a.userid < b.userid) {
                    return -1;
                }
                return 0;
            });
        console.log(allUser);
        console.log(users);
        setAllUser(newData);

        setSortById(prevId => !prevId);

    }

    //SORT BY NAME
    const sortingByUsername = () => {


        const newData = users.sort((a, b) => {
            if(a.username > b.username) {
                return 1;
            }
            if(a.username < b.username) {
                return -1;
            }
            return 0;
        });
        console.log(allUser);
        console.log(newData);
        setAllUser(newData);

        setSortByUsername(prevUsername => !prevUsername);

    }

    //SORT BY ROLE
    const sortingByRole = () => {

        const newData = users.sort((a, b) => {
            if(a.account > b.account) {
                return 1;
            }
            if(a.account < b.account) {
                return -1;
            }
            return 0;
        });
        console.log(allUser);
        console.log(newData);
        setAllUser(newData);

        // getAllUsers()
        setSortByRole(prevRole => !prevRole);

    }

    //DELETE USER

    // /deleteUser/:username

    async function deteleUser(username) {

        const data = await axios.delete(`http://localhost:4000/users/deleteUser/${username}`);
        alert("User Deleted");
        getAllUsers();
    }

    //GET TOTAL AMIN USERS
    async function getTotalAdminUsers() {
        const data = await axios.get('http://localhost:4000/users/totalusers/account/admin');
        const amount = data.data[0].count

        console.log(amount)
        setAdminCount(amount);
    }

    //GET TOTAL ASSOCIATE USERS
    async function getTotalAssociateUsers() {
        const data = await axios.get('http://localhost:4000/users/totalusers/account/associate');
        const amount = data.data[0].count

        console.log(amount)
        setAssociateCount(amount);
    }

    async function getReportMethod() {
        const data = await axios.get('http://localhost:4000/categories/makereport');
        setGetReport(data.data);

    }

//GENERAL HUB FOR USEEFFECT
    useEffect(() => {

        //CALLING GET ALL USERS & DETAILS
        getAllUsers();
        //CALLING GET ALL TOTAL ADMIN
        getTotalAdminUsers()
        //CALLING GET ALL TOTAL ASSOCIATES
        getTotalAssociateUsers()

        getReportMethod();

    },[]);


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
                        <div className="col-xl-4 col-lg-4 col-md-4 mt-2">
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
                                                    {allUser.length}
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
                        <div className="col-xl-4 col-lg-4 col-md-4 mt-2">
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
                                                    {associateCount}
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
                        <div className="col-xl-4 col-lg-4 col-md-4 mt-2">
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
                                                    {adminCount}
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

                                                <div className="text-center mt-5">
                                                    <button
                                                        className="buttonMainStyle"
                                                        role="button"
                                                        type="submit"
                                                        onClick={() => setToggleAllUsers(prevState => !prevState)}
                                                    >
                                                        Get Users
                                                    </button>

                            { toggleAllUsers &&
                                <aside>
                                    <div className="fade-in-animation">
                                        <div className="d-flex flex-sm-row flex-column justify-content-around">
                                            <button className="adminbtn"
                                                onClick={sortingById}
                                            >
                                                Sort By Id
                                            </button>
                                            <button
                                                className="adminbtn"
                                                onClick={sortingByUsername}
                                            >
                                                Sort By username
                                            </button>
                                            <button
                                                className="adminbtn"
                                                onClick={sortingByRole}
                                            >
                                                Sort By role
                                            </button>
                                        </div>

                                    </div>
                                </aside>
                            }


                        { toggleAllUsers &&

                            allUser.map((user, index) => {

                                return(

                        <aside key={user.userid} className="fade-in-animation">


                                <table className="table table-striped table-hover">
                                    <tbody className="text-center">
                                        <tr>
                                            <div className="row">

                                                <div className="d-flex justify-content-center flex-md-row flex-column">

                                                <div className="col-md-2 col-sm-2"><td className="text-center">{user.userid}</td></div>
                                                <div className="col-md-2 col-sm-2"><td className="text-center">{user.username}</td></div>
                                                <div className="col-md-2 col-sm-2"><td className="text-center">{user.password}</td></div>
                                                <div className="col-md-3 col-sm-3"><td className="text-center">{user.email}</td></div>
                                                <div className="col-md-2 col-sm-2"><td className="text-center">{user.account}</td></div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button
                                                        className="adminDeletebtn"
                                                        onClick={() => deteleUser(user.username)}
                                                    >
                                                        <i className="bi bi-dash-square">-</i>
                                                    </button>
                                                </div>

                                                {/*Ent of flex tage    */}
                                                </div>

                                            {/*ENDING DIV FOR TABLE ROW    */}
                                            </div>
                                        </tr>
                                    </tbody>
                                </table>
                        </aside>
                                );
                            })};


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
                                                    Admin  and Associates Totals
                                                </div>
                                                <div className=" text-center h5 mb-0 font-weight-bold text-gray-800">
                                                    <UsersChart adminCount={adminCount} associateCount={associateCount}/>
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
                                                    - add the sorting scripts
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

                                                    {
                                                        getReport.map((report, index) => {
                                                            return (
                                                            <div key={report.caseid}>
                                                                {report.caseid}
                                                                {report.reportid}
                                                                {report.username}
                                                                {report.issue}
                                                            </div>
                                                            );
                                                        })

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



                    {/* END OF WRAPPER CONTENT CLASS*/}
                </div>

            </section>
            
        </>
    );
};

export default UserPanel;

