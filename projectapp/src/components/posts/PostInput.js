function PostInput(){

    return(
        <div className="post-input-container">
            {/* <div> */}
                <img src="../../../images/user-badge-purple.svg" className="user-badge" alt="user badge"/>
                <span>Username</span>
            {/* </div> */}
            <form className="post-input">
                <textarea className="form-control" rows="5" placeholder="Post your thoughts here..."></textarea>
                <button type="button" className="postbtn">Post</button>
            </form>            
        </div>
    );
}

export default PostInput;