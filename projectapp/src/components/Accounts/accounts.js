// import axios from 'axios';
// import { Fragment, useEffect, useContext } from 'react';
// import DataStore from "../../dataStore/dataStore";


// //import stylesheet from './account.css';

// function accountItems() {

//     //Call the DATASTORE global variable from STORE
//     const { account, setAccount } = useContext(DataStore);

//     useEffect(() => {
//         const myProfile = document.getElementById('allposts')
//         const content = myProfile.value;

//         const myPosts = {
//             posttext: post.posttext,
//             image: post.image,
//             likes: post.likes
//         }

//         axios.get('http://localhost:4000/posts/PostByUser/authorid', myPosts).then((res) => {

            
//         });

//         const profileLists = document.getElementById('allposts').elements
//         const userProfile = {
//             username: user.username,
//             firstname: user.firstname,
//             lastname: user.lastname,
//         }
//         axios.get('http://localhost:4000/users/userByName',)

//         const recentReports = {
//             caseid: report.caseid,
//             issue: report.issue
//         }
//         axios.get('http://localhost:4000/categories/retrieveReport',)

//     });

//     return (
//         <Fragment>
//             <div className="container">
//                 <div className="user-name">
//                     <div className="card flex-column">
//                         <h1 className="username">{user.username}</h1>
//                         <h2 className="card-header text-center">
//                             Welcome {user.firstname, user.lastname}
//                         </h2>
//                         <h3>Your recent posts and reactions are listed below</h3>
//                         <p className="card-image text-center image">Images posted {post.image}</p>
//                         <p className="card-posttext text-center posttext">posttext: {post.posttext}</p>
//                         <p className="card-likes-quantity text-center likes">likes: {post.likes}</p>
//                     </div>
//                 </div>
//                 <div id="allposts" className="posts">
//                     <span style="display:inline-block;border:1px solid #00ff00;width:150px;height:50px;"></span>

//                 </div>
//                 <div className="reports">
//                     <h3> Your recent reports</h3>
//                     <p className="card-id text-center caseid">caseId {report.caseid}</p>
//                     <p className="card-issue text-center issue">issue reported: {report.issue}</p>

//                 </div>

//             </div>
//         </Fragment>
//     );
// }

// export default accountItems;