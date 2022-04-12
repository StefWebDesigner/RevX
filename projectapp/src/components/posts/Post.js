function Post({pic, username, content, postdate, likes}){


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
            <small className="post-date">{postdate}</small>

            {/* Post footer - likes, share, report */}
            <div className="post-footer">
                {/* like icon/ number of likes */}
                <button type="button" className="like-button">Like</button>
                <span>{likes}</span>
            </div>

        </div>
    );
}

export default Post;