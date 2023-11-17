import "./card.css";
import { FaEye, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Card(props) {
  const { heading, author, date, content, likes, views } = props.blog;
  const { user } = props;
  //console.log(user);
  const navigate = useNavigate();
  //console.log(props.blog);
  function handleClick() {
    navigate("/blog", {
      state: props.blog,
    });
  }
  function editHandler() {
    navigate("/edit-blog", {
      state: props.blog,
    });
  }
  async function deleteHandler(id) {
    try {
      let data = await fetch(`http://localhost:5000/delete-blog/${id}`, {
        method: "Delete",
      });
      data = await data.json();
      toast.success("Blog deleted successfully");
      navigate("/");
    } catch {
      console.log("error");
    }
  }
  return (
    <div className="card">
      <article onClick={handleClick}>
        <div className="cardImage">
          <img src="./images/headerImage.jpg" />
        </div>
        <div className="blogHeading">{heading}</div>
        <div className="authorName">Author: {author}</div>
        <div className="blogContent">{content.slice(0, 100)} ...</div>
      </article>
      <div className="likesViews">
        <div className="blogIcon">
          <FaRegThumbsUp />
          <span>{likes}</span>
          {/* <FaThumbsUp /> */}
        </div>
        <div className="blogIcon">
          <FaEye />
          <span> {views}</span>
        </div>
      </div>
      {user?.firstName ? (
        <div className="Btn">
          <div>
            <button
              onClick={editHandler}
              style={{ backgroundColor: "green", color: "white" }}
            >
              Edit
            </button>
          </div>
          <div>
            <button
              onClick={() => deleteHandler(props.blog._id)}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Card;
