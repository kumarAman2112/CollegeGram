import "./Topbar.css";
import { Link } from "react-router-dom";
import { Search, Person, Chat, Notifications} from "@mui/icons-material";
export default function Topbar() {

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Collegegram</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends,posts or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
         <Link to="/" style={{textDecoration:"none",color:"white"}}> 
          <span className="topbarlink">HomePage</span>
          </Link>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          
          </div>
          <Link to="/profile"  style={{textDecoration:"none",color:"white"}} >
        <img src="/assets/aman.jpg" alt="" className="topbarImg" />
          </Link>
  
      </div>
    
     
    </div>
  );
}
