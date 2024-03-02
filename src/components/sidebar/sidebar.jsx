import "./Sidebar.css";
import {
  RssFeed,
  Chat,
  Videocam,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <RssFeed className="sidebaricon" />
            <span className="sidebarlistitemtext">feed</span>
          </li>
          <li className="sidebarlistitem">
            <Chat />
            <span className="sidebarlistitemtext">Chats</span>
          </li>
          <li className="sidebarlistitem">
            <Videocam />
            <span className="sidebarlistitemtext">Videos</span>
          </li>
          <li className="sidebarlistitem">
            <Group />
            <span className="sidebarlistitemtext">Groups</span>
          </li>
          <li className="sidebarlistitem">
            <Bookmark />
            <span className="sidebarlistitemtext">Bookmarks</span>
          </li>
          <li className="sidebarlistitem">
            <HelpOutline />
            <span className="sidebarlistitemtext">Questions</span>
          </li>
          <li className="sidebarlistitem">
            <WorkOutline />
            <span className="sidebarlistitemtext">jobs</span>
          </li>
          <li className="sidebarlistitem">
            <Event />
            <span className="sidebarlistitemtext">Events</span>
          </li>
          <li className="sidebarlistitem">
            <School />
            <span className="sidebarlistitemtext">Courses</span>
          </li>
        </ul>
        <button className="sidebarbutton">show more</button>
        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          <li className="sidebarfriend">
            <img src="/assets/2.jpg" alt="" className="sidebarfriendimg" />
            <span className="sidebarfriendname">John carter</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/3.jpg" alt="" className="sidebarfriendimg" />
            <span className="sidebarfriendname">Halex Carry</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/4.jpeg" alt="" className="sidebarfriendimg" />
            <span className="sidebarfriendname">Robert Parker</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/6.webp" alt="" className="sidebarfriendimg" />
            <span className="sidebarfriendname">Jamie Carlson</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/5.avif" alt="" className="sidebarfriendimg" />
            <span className="sidebarfriendname">Henry Morkel</span>
          </li>
          <li className="sidebarfriend">
            <img src="/assets/aman.jpg" alt="" className="sidebarfriendimg" />
            <span className="sidebarfriendname">Aman Kumar</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
