import { useState,useEffect } from "react"
import "./Feed.css"
import Share from "../share/share"
import Post from "../post/post"
import axios from "axios"

const Feed=()=> {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const fetchPosts=async()=>{
      const res=await axios.get("https://api.unsplash.com/search/photos?page=1&query=office&client_id=a3-FKqr6cdxSGjZXNU8iyKSEuVr5NpOx8X4Buw0qWZE")
      setPosts(res.data.results)
    }
    fetchPosts()
  },[]);
  return (
    <div className="feed">
        <div className="feedwrapper">
            <Share/>
            {posts.map((p)=>(
              <Post key={p.id} post={p}/>
            ))}
        </div>
    </div>
  )
}
export default Feed;
