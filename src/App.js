import Login from "./components/login/login";
import Profile from "./pages/profile/profile";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>  
        <Route exact path="/" element={<Home/>} />
       <Route path="/profile" element={<Profile/>} />
       <Route path="/login" element={<Login/>} />
        </Routes>
    
    </Router>
  )
}

export default App;
