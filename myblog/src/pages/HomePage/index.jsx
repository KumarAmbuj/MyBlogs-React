import HeaderImage from "../../component/HeaderImage";
import Card from "../../component/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./home.css";
import { useEffect, useState } from "react";
function HomePage(props) {
  const [blogs, setBlogs] = useState([]);
  async function getBlogs() {
    let data = await fetch("http://localhost:5000/get-blogs");
    data = await data.json();
    //console.log(data);
    setBlogs(data);
  }
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="homePage">
      <HeaderImage />
      <div className="heading">Top Blogs</div>
      <div className="topBlogs">
        {blogs.length > 0 &&
          blogs.map((val) => {
            return <Card key={val._id} blog={val} />;
          })}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
}
export default HomePage;
