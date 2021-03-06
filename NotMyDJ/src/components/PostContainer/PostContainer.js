import React from "react";
import "./post-container.css";
// import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => (
  <div className="post">
    <div className="post-header">
      <img
        className="user-thumb"
        src={
          props.user.images[0].url ||
          "https://pngimage.net/wp-content/uploads/2018/05/default-user-profile-image-png-2.png"
        }
        alt={"user thumbnail"}
      />
      <div className="post-title">
        <p className="user"> {props.user.email} </p>
        <p className="user">{props.playlist.name}</p>
      </div>
    </div>
    <img
      className="post-image-fullsize"
      src={props.playlist.images[0].url}
      alt={"fullsize user post"}
    />
    {/* <div className="post-bottom">
      <CommentSection
        mediaId={props.post.mediaId}
        likeIndex={props.post.thumbnailUrl + "liked"}
        postIndex={props.post.thumbnailUrl}
        likes={props.post.likes}
        comments={props.post.comments}
      />
    </div> */}
  </div>
);

export default PostContainer;

PostContainer.defaultProps = {
  user: {
    username: "default name",
    images: [
      "https://pngimage.net/wp-content/uploads/2018/05/default-user-profile-image-png-2.png"
    ]
  }
};
