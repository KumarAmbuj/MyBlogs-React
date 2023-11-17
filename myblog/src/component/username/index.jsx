import "./username.css";
function UserName(props) {
  const { user } = props;
  return (
    <div className="userName">
      Hey {user.firstName ? user.firstName : "Bloggers"} Hi !!
    </div>
  );
}
export default UserName;
