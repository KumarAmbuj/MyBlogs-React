import UserName from "../username";
import SearchBox from "../SearchBox";
import Button from "../Button";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./searchbar.css";
function SearchBar(props) {
  const { user } = props;
  return (
    <>
      <ToastContainer />
      <div className="searchBar">
        <div className="child1">
          <UserName user={user} />
        </div>
        <div className="child2">
          <SearchBox />
        </div>
        <div className="child3">
          <div className="marginRight">
            {user.firstName ? (
              <Link to={"/add-blogs"}>
                <Button text="Add Blog" />
              </Link>
            ) : (
              <Link to={"/login"}>
                <Button
                  text="Add Blog"
                  onClick={() => {
                    toast.error("Login First !!!");
                  }}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchBar;
