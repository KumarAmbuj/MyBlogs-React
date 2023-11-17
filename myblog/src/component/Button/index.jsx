import { Link } from "react-router-dom";
import "./button.css";
function Button(props) {
  const { text, to, onClick } = props;

  // if (to !== undefined && typeof to === "string") {
  //   return (
  //     <Link to={to} className="btn">
  //       {text}
  //     </Link>
  //   );
  // }
  return (
    <div>
      <button className="btn" onClick={onClick}>{text}</button>
    </div>
  );
}
export default Button;
