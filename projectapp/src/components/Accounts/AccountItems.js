import axios from 'axios';
import { Fragment, useEffect, useContext, useState } from 'react';
import DataStore from "../../dataStore/dataStore";
import Account from './Account';


function AccountItems(_getUserInfo) {

    const {user} = useContext(DataStore);
    const [userInfo, setUserInfo] = useState([]);
    const [postInfo, setPostInfo] = useState([]);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/users/userByName/${user.username}`).then((res) => {
            setUserInfo(res.data)

        });

        axios.get('http://localhost:4000/posts/PostByUser/authorid').then((res) => {

            setPostInfo(res.data);
        });


        axios.get('http://localhost:4000/categories/retrieveReport').then((res) => {
            setReports(res.data);

        });

    });

        return (
             <>

              
                   
                        username={userInfo.username}
                        firstname={userInfo.firstname}
                        lastname={userInfo.lastname}
                
              
                {/* <div>
               
                        posttext={account.posttext}
                        postdate={account.postdate}
                        likes={account.likes}
    
                </div>
                <div>
            
                        caseid={account.caseid}
                        reportid={account.reportid}
                        issue={account.issue}
                
               

                    
                </div>  */}

           </> 
        );
    
}


    export default AccountItems;