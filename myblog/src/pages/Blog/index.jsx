import "./blog.css";
import { FaEye, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
function Blog() {
  //const { heading, date, likes, views, content, author } = props.state;
  const location = useLocation();
  const { heading, author, date, likes, views, content } = location.state;
  //console.log(blog);
  return (
    <div className="blog">
      <div className="left">
        <div className="blogImage">
          <img src="./images/headerImage.jpg" />
        </div>
        <div className="authorName">Author: {author}</div>
        <div className="date">Date: {date.split(" ").join("/")}</div>
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
      </div>
      <div className="right">
        <div className="blogHeading">{heading}</div>
        <div className="blogContent">
          <p>{content}</p>

          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            reprehenderit et, quisquam molestiae, eos eaque quod dolorem tenetur
            magnam possimus ipsam sapiente quis necessitatibus nesciunt. Est
            soluta ratione necessitatibus saepe ad, unde quo beatae aspernatur
            tempore officia exercitationem sunt perspiciatis nobis repudiandae,
            officiis reiciendis harum. Accusamus totam modi non natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea impedit
            culpa temporibus eveniet reprehenderit. Nisi culpa quo nulla nostrum
            debitis eveniet, animi neque soluta. Explicabo commodi natus, modi,
            accusantium vel consequatur error adipisci vero fugiat facilis eum?
            Reiciendis eveniet fuga deleniti saepe id maiores, modi molestiae
            tempore esse distinctio blanditiis?
          </p> */}
        </div>
      </div>
    </div>
  );
}
export default Blog;
