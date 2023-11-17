import CategoryCard from "../../component/CategoryCard";
import { useNavigate } from "react-router-dom";
import "./category.css";
import { useEffect } from "react";
function Category() {
  const navigate = useNavigate();
  async function getBlogs(value) {
    //console.log(value);
    let x = await fetch(`http://localhost:5000/get-blogs/category/${value}`);
    x = await x.json();
    navigate("/category-wise-blog", {
      state: { data: x, category: value },
    });
    //console.log(x);
  }
  function clickHandler(value) {
    //console.log(value);
    //navigate("/category-wise-blog");
    getBlogs(value);
  }
  return (
    <div>
      <div className="categoryList">
        <CategoryCard
          image="./images/dsa.png"
          value="Data Structure"
          onClick={() => {
            clickHandler("Data Structure");
          }}
        />
        <CategoryCard
          image="./images/java.png"
          value="Java"
          onClick={() => {
            clickHandler("Java");
          }}
        />
        <CategoryCard
          image="./images/database.jpg"
          value="Database"
          onClick={() => {
            clickHandler("Database");
          }}
        />
        <CategoryCard
          image="./images/javascript.png"
          value="Javascript"
          onClick={() => {
            clickHandler("Javascript");
          }}
        />
        <CategoryCard
          image="./images/node.png"
          value="NodeJS"
          onClick={() => {
            clickHandler("NodeJS");
          }}
        />
        <CategoryCard
          image="./images/react.png"
          value="React"
          onClick={() => {
            clickHandler("React");
          }}
        />
        <CategoryCard
          image="./images/express.jpg"
          value="ExpressJS"
          onClick={() => {
            clickHandler("ExpressJS");
          }}
        />
        <CategoryCard
          image="./images/algorithm.jpg"
          value="Algorithm"
          onClick={() => {
            clickHandler("Algorithm");
          }}
        />
      </div>
    </div>
  );
}
export default Category;
