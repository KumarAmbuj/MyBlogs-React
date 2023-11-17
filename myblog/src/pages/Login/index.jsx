import Input from "../../component/Input";
import Button from "../../component/Button";
import { LOGIN } from "../../constant/restApiEndPoint";
import { useState } from "react";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const [loginData, setLoginData] = useState({
    mobile: "",
    password: "",
  });
  const { user, updateUser } = props;
  const navigate = useNavigate();
  async function sendLoginData() {
    try {
      let result = await fetch(LOGIN, {
        method: "post",
        body: JSON.stringify({ ...loginData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      //console.log(result);
      if (result.firstName) {
        toast.success("Login successful");
        updateUser(result);
        setTimeout(() => {
          navigate("/");
        }, 800);
      } else {
        toast.error("Invalid Credential");
      }
    } catch {
      toast.error("Some error occured");
      navigate("/");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(loginData);
    sendLoginData();
  }
  function changeHandler(e) {
    //console.log(e.target.name, e.target.value);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  return (
    <>
      <ToastContainer />
      <div className="signUpForm">
        <div className="heading">
          <span>Log in</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formData">
            <Input
              placeholder="Mobile number"
              type="number"
              onChange={changeHandler}
              name="mobile"
            />

            <Input
              placeholder="Password"
              type="password"
              onChange={changeHandler}
              name="password"
            />

            <div>
              <Button text="Login" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
