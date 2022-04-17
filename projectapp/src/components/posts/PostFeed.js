import {useEffect, useState} from 'react';
import axios from 'axios';
import Post from './Post';

function PostFeed({createNewPost, setReportInfo}){

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/posts/withUserInfo').then((res) => {

            setPosts(res.data);
        });
    },[]);
    

    return posts.map((post) => {

        return (
                <Post
                    key={post.postid}
                    postid={post.postid}
                    profilePic={post.pic}
                    userid={post.userid}
                    username={post.username}
                    accountType={post.account}
                    image={post.image}
                    content={post.posttext}
                    postdate={post.postdate}
                    likes={post.likes}
                    setReportInfo={setReportInfo}
                />
        );
    });
    
}

export default PostFeed;