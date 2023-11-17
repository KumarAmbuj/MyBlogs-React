import HeaderImage from "../component/HeaderImage";
import NavBar from "../component/Navbar";
import SearchBar from "../component/SearchBar";
import About from "../pages/About";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import FooterNavbar from "../component/FooterNavbar";
import AddBlogs from "../pages/AddBlog";
import HomePage from "../pages/HomePage";
import Blog from "../pages/Blog";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function Home() {
  return (
    <>
      
      <HomePage />
      
    </>
  );
}
export default Home;
