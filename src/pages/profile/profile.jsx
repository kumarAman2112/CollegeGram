import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Feed from "../../components/feed/feed.jsx";
import Rightbar from "../../components/rightbar/rightbar.jsx";
import Login from "../../components/login/login";
import { useState } from "react";
import "./profile.css";
export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {!isLoggedIn ? (
        <Login login={setIsLoggedIn} />
      ) : (
        <div>
          <Topbar/>
          <div className="profile">
            <Sidebar />
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                  <img
                    src="assets/beach.jpg"
                    alt=""
                    className="profileCoverPage"
                  />
                  <img
                    src="assets/aman.jpg"
                    alt=""
                    className="profileCoverImage"
                  ></img>
                </div>
                <div className="profileInfo">
                  <h4 className="profileInfoName">Aman Kumar</h4>
                  <span className="profileInfoDesc">Hello!</span>
                </div>
              </div>
              <div className="profileRightBottom">
                <Feed />
                <Rightbar profile={false}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
