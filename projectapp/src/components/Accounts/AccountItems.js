import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import DataStore from "../../dataStore/dataStore";
import { useNavigate } from "react-router-dom";

//import AccountForms from "../users-comps/AccountForm"


function AccountItems(_getUserInfo) {


    const { user } = useContext(DataStore);
    // const { post } = useContext(DataStore);
    // const { report } = useContext(DataStore);

    const [userInfo, setUserInfo] = useState([]);
    const [postInfo, setPostInfo] = useState([]);
    const [reports, setReports] = useState([]);

    useEffect(() => {

    
        axios.get(`http://localhost:4000/users/userByName/${user.username}`).then((res) => {
            setUserInfo(res.data)
            console.log(res.data);

        });

        axios.get(`http://localhost:4000/posts/PostByUser/authorid/${user.userid}`).then((res) => {

            setPostInfo(res.data);
        });


        axios.get(`http://localhost:4000/categories/retrieveReport/${user.userid}`).then((res) => {
            setReports(res.data);

        });

    });

    let navigate = useNavigate(); 
  const routeChange = () => { 
    let path = "../editAccount/";
    navigate(path);
  }

    return (
        <>
            <div className="accountsContainer">
                <div className="userInfo">
                    username={userInfo.username}
                    firstname={userInfo.firstname}
                    lastname={userInfo.lastname}
                </div>

                <div className="postInfo">
                    posttext={postInfo.posttext}
                    postdate={postInfo.postdate}
                    likes={postInfo.likes}
                </div>
                <div className="reportInfo">
                    caseid={reports.caseid}
                    reportid={reports.reportid}
                    issue={reports.issue}

                </div>
            </div>
            <button type="submit" className="signup-page" id="signup" value="Submit" onClick={routeChange} >Edit Profile</button>
        </>
    );

};

export default AccountItems;