import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function NavBar(props) {
  const { user, updateUser } = props;
  const navigate = useNavigate();
  //console.log(props);
  return (
    <>
      <div className="header">
        <div className="logoName">
          <div className="logo">
            <img src="./images/myblog.png"></img>
          </div>
          <Link to={"/"}>
            <div className="name">MyBlog</div>
          </Link>
        </div>
        <div className="navItem">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/category"}>Category</Link>
            </li>

            {user.firstName ? (
              <li>
                <Link to={"/my-blog"}>My Blogs</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="rightNav">
          <ul>
            {!user.firstName ? (
              <>
                <li>
                  <Link to={"/sign-up"}>Sign Up</Link>
                </li>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              </>
            ) : (
              <>
                <li
                  onClick={() => {
                    updateUser({});
                    toast.success("Logout successful!");
                    navigate("/");
                  }}
                >
                  Logout
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default NavBar;
