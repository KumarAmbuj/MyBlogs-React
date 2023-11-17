import "./FooterNavbar.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaPhoneVolume,
  FaRegIdBadge,
  FaQuestionCircle,
  FaGripVertical,
  FaRegWindowRestore,
} from "react-icons/fa";
function FooterNavbar(props) {
  const { user } = props;
  return (
    <div className="footerNavbar">
      <div className="icon">
        <Link to="/">
          {" "}
          <FaHome />
        </Link>
      </div>
      <div className="icon">
        <Link to="/about">
          {" "}
          <FaRegIdBadge />
        </Link>
      </div>
      <div className="icon">
        <Link to="/about">
          <FaPhoneVolume />
        </Link>
      </div>
      <div className="icon">
        <Link to="/category">
        <FaGripVertical />
        </Link>
      </div>
      {user.firstName ? (
        <div className="icon">
          <Link to="/my-blog">
            <FaRegWindowRestore />
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default FooterNavbar;
