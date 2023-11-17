import HeaderImage from "../../component/HeaderImage";
import Card from "../../component/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./categoryWiseBlog.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function CategoryWiseBlog() {
  const location = useLocation();
  const [myBlogs, setMyBlogs] = useState(location.state.data);
  const [category, setCategory] = useState(location.state.category);

  return (
    <>
      <div className="homePage">
        <div className="heading">{category}</div>
        <div className="topBlogs">
          {myBlogs.length > 0 &&
            myBlogs.map((val) => {
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
    </>
  );
}
export default CategoryWiseBlog;
