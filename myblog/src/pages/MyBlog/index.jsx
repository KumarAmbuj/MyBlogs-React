import HeaderImage from "../../component/HeaderImage";
import Card from "../../component/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./myblog.css";
import { useEffect, useState } from "react";
function MyBlog(props) {
  const { user } = props;
  const [myBlogs, setMyBlogs] = useState([]);
  async function getMyBlogs() {
    let data = await fetch(`http://localhost:5000/get-blogs/${user._id}`);
    data = await data.json();
    //console.log(data);
    setMyBlogs(data);
  }
  useEffect(() => {
    getMyBlogs();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="homePage">
        <div className="heading">My Blogs</div>
        <div className="topBlogs">
          {myBlogs.length > 0 &&
            myBlogs.map((val) => {
              return <Card key={val._id} blog={val} user={user} />;
            })}
          {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
        </div>
      </div>
    </>
  );
}
export default MyBlog;
