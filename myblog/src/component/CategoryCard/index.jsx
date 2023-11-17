import "./categoryCard.css";
function CategoryCard(props) {
  const { image, value, onClick } = props;
  return (
    <div>
      <div className="categoryCard" onClick={onClick}>
        <img src={image}></img>
      </div>
    </div>
  );
}
export default CategoryCard;
