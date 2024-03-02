import './Rightbar.css'

export default function rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
        <>
         <div className="birthdaycontainer">
          <img src="/assets/birth.png" alt=""  className='birthdayImg'/>
          <span className="birthdayText"><b>Aviral</b> and <b>3 others</b>  have birthday today</span>
        </div>
        <img src='/assets/adv.png' alt='' className='rightbarad'></img>
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="onlinefriendslist">
          <li className="onlinefriend">
            <div className="onlinefriendimgcontainer">
            <img src="/assets/k.jpg" alt=""  className='onlinefriendimg'/>
            <span className="onlinebatch"></span>
            </div>
            <span className='onlinefriendusername'>Aman Kumar</span>
          </li>
          <li className="onlinefriend">
            <div className="onlinefriendimgcontainer">
            <img src="/assets/1.jpeg" alt=""  className='onlinefriendimg'/>
            <span className="onlinebatch"></span>
            </div>
            <span className='onlinefriendusername'>Scheiwan</span>
          </li>
          <li className="onlinefriend">
            <div className="onlinefriendimgcontainer">
            <img src="/assets/2.jpg" alt=""  className='onlinefriendimg'/>
            <span className="onlinebatch"></span>
            </div>
            <span className='onlinefriendusername'>John Carter</span>
          </li>
          <li className="onlinefriend">
            <div className="onlinefriendimgcontainer">
            <img src="/assets/3.jpg" alt=""  className='onlinefriendimg'/>
            <span className="onlinebatch"></span>
            </div>
            <span className='onlinefriendusername'>Halex Carry</span>
          </li>
          <li className="onlinefriend">
            <div className="onlinefriendimgcontainer">
            <img src="/assets/4.jpeg" alt=""  className='onlinefriendimg'/>
            <span className="onlinebatch"></span>
            </div>
            <span className='onlinefriendusername'>Robert Parker</span>
          </li>
        </ul>
      
        </>
    )
   }
   const ProfileRightBar=()=>{
    return(
     <>
      <h4 className="rightbartitle">User Information</h4>
      <div className="rightbarinfo">
        <div className="rightbarinfoitem">
          <span className="rightbarinfokey">City:</span>
          <span className="rightbarinfovalue">New York</span>
        </div>
        <div className="rightbarinfoitem">
          <span className="rightbarinfokey">From:</span>
          <span className="rightbarinfovalue">India</span>
        </div>
        <div className="rightbarinfoitem">
          <span className="rightbarinfokey">Relationship:</span>
          <span className="rightbarinfovalue">Single</span>
        </div>
      </div>
      <h4 className="rightbartitle">User Friends</h4>
      <div className="rightbarfollowings">
        <div className="rightbarfollowing">
          <img src="/assets/1.jpeg" alt="" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">Scheiwan</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/2.jpg" alt="" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">John Carter</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/3.jpg" alt="" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">Halex Carry</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/assets/4.jpeg" alt="" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">Robert Parker</span>
        </div>
          </div>
     </>
    )
   }
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        { profile?<ProfileRightBar/>:<HomeRightbar/>}
       </div>
    </div>
  )
}
