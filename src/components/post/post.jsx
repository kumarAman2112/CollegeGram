import "./post.css";
import { MoreVert } from "@mui/icons-material";
import {ThumbUpAlt,Favorite,ModeComment} from "@mui/icons-material";
import { useState } from "react";

export default function Post(props) {
  const [countlikes,setCountlike] = useState(props.post.likes);
  const likesHandler = () => 
  {
    setCountlike(countlikes+1);
  }
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <img className="postProfileImg" src={props.post.user.profile_image.large} alt="" />
            <span className="postUsername">{props.post.user.username}</span>
            <span className="postDate">5 mins</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
            <i className="postTopIcon"></i>
          </div>
        </div>
        <div className="postCenter"> 
          <span className="posttext">{props.post.description}</span>
          <img src={props.post.links.download} alt="" className="postimg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpAlt htmlColor="navy" className="postlikeicon" onClick={likesHandler}/>
            <Favorite htmlColor="crimson" className="postlikeicon" onClick={likesHandler}/>
            <span className="postlikecounter">{countlikes}</span>
          </div>
          <div className="postBottomRight">
            <ModeComment htmlColor="green" className="postcommenticon"/>
            <span className="postcommenttext">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
