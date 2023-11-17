import "./editBlog.css";
import Button from "../../component/Button";
import { useState } from "react";
import { ADD_BLOGS } from "../../constant/restApiEndPoint";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function EditBlog(props) {
  const location = useLocation();
  const { user } = props;
  const navigate = useNavigate();
  var currentDate = new Date();

  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  const [blogData, setBlogData] = useState(location.state);
  async function sendBlogData() {
    try {
      let result = await fetch(
        `http://localhost:5000/edit-blog/${blogData._id}`,
        {
          method: "Put",
          body: JSON.stringify({ ...blogData }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      result = await result.json();
      //console.log(result);
      if (result) {
        toast.success("Blog Edited successfuly");
        setTimeout(() => {
          navigate("/");
        }, 800);
        //console.log("blog added");
      } else {
        toast.error("Error");
      }
    } catch {
      toast.error("Some error occured");
      navigate("/");
      //console.log("error");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    sendBlogData();
    //console.log(blogData);
  }
  function changeHandler(e) {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });

    //console.log(e.target.name, e.target.value);
  }

  return (
    <>
      <ToastContainer />
      <div className="addblog">
        <div className="heading">Add Blog</div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="formData">
            <div>
              <div className="head">Heading :</div>
              <textarea
                rows="2"
                cols="25"
                required
                className="borderRadius"
                name="heading"
                onChange={changeHandler}
                value={blogData.heading}
              />
            </div>
            {/* <div>
            <div className="head">Image :</div>
            <input
              type="file"
              className="borderRadius"
              name="blogImage"
              onChange={changeHandler}
              required
            />
          </div> */}
            <div>
              <div className="head">Category :</div>
              {/* <textarea
              rows="2"
              cols="25"
              required
              className="borderRadius"
              name="category"
              onChange={changeHandler}
            /> */}
              <select
                onChange={changeHandler}
                name="category"
                required
                value={blogData.category}
              >
                <option value="">select</option>
                <option value="Data Structure">Data Strucure</option>
                <option value="Algorithm">Algorithm</option>
                <option value="Java">Java</option>
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
                <option value="NodeJS">Node js</option>
                <option value="ExpressJS">Express js</option>
                <option value="Database">Database</option>
              </select>
            </div>
            <div>
              <div className="head">Content :</div>
              <textarea
                rows="20"
                cols="50"
                required
                className="borderRadius"
                name="content"
                value={blogData.content}
                onChange={changeHandler}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Button text="Edit Blog" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default EditBlog;
