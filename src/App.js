import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Topbar from "./components/admin/Topbar";
import CodeBlog from "./pages/CodeBlog"
import Single from "./pages/Single"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Services from "./pages/Services";
import AddCode from "./pages/admin/Code/AddCode";
function App() {
  return (
    <BrowserRouter>
      
       <Routes>
          <Route index element={<><Topbar/><Navbar/><Home/></>}/>
          <Route path="/codeblog" element={<><Topbar/><Navbar/><CodeBlog/></>} />
          <Route path="/codeblog/scode/:s" element={<><Topbar/><Navbar/><Single/></>} />
          <Route path="/about" element={<><Topbar/><Navbar/><About/></>} />
          <Route path="/contact" element={<><Topbar/><Navbar/><Contact/></>} />
          <Route path="/services" element={<><Topbar/><Navbar/><Services/></>} />
          <Route path="/login" element={<><Login/></>} />


          {/* Admin Routes */}
          <Route path="/addcode" element={<><Topbar/><Navbar/><AddCode/></>} />

      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
