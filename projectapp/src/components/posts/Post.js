import { useState } from 'react';
import axios from 'axios';

function Post({postid, pic, username, content, postdate, likes}){

    const [liked, setLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(likes);

    let pubDate = new Date(postdate).toLocaleString("en-US",
            {dateStyle:"medium", timeStyle:"short", hour12:true});

    function handleClick() {

        //update like count
        if (!liked) {
            // axios.put(`http://localhost:4000/posts/addLike/${postid}`, 1);
            setLiked(true);
            setNumLikes(numLikes + 1);

        //user is removing their like
        } else {
            setLiked(false);
            setNumLikes(numLikes - 1);
        }

    }

    return (
        <div className="post-container">

            {/* Heading - pic, name, follow button */}
            <img src={pic ? pic : "../../../images/user-badge-purple.svg"} className="user-badge" alt="user badge" />
            
            {/* link to user profile */}
            <span>{username}</span>

            {/* follow button */}

            {/* Post body content */}
            <div className="post-content">
                <p>{content}</p>
            </div>
            <small className="post-date">{pubDate}</small>

            {/* Post footer - likes, share, report */}
            <div className="post-footer">
                {/* like icon/ number of likes */}
                <button type="button" className="like-button" onClick={handleClick}>Like</button>
                <span>{numLikes}</span>
            </div>

        </div>
    );
}

export default Post;