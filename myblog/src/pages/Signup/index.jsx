import Input from "../../component/Input";
import Button from "../../component/Button";
import "./signup.css";
import { useEffect, useState } from "react";
import { Sign_Up } from "../../constant/restApiEndPoint";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  //const [message, setMessage] = useState("");
  const [userLocalStorageData, setUserLocalStorageData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("MyBlogUser") === null) {
      localStorage.setItem("MyBlogUser", JSON.stringify([]));
    } else {
      let x = JSON.parse(localStorage.getItem("MyBlogUser"));
      setUserLocalStorageData([...x]);
    }
  }, []);
  async function sendSignUpData() {
    try {
      let result = await fetch(Sign_Up, {
        method: "post",
        body: JSON.stringify({ ...userData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();

      toast.success(`${"Sign Up successful"}`);
      let x = [...userLocalStorageData];
      x.push(userData.mobile);
      setUserLocalStorageData(x);

      //console.log(userLocalStorageData);
      localStorage.setItem("MyBlogUser", JSON.stringify(x));
      console.log(userLocalStorageData);
      if (result) {
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      }
    } catch {
      toast.error(`${"some error occured"}`);
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } finally {
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(userLocalStorageData);
    let z = userLocalStorageData.filter((val) => {
      return val == userData.mobile;
    });
    if (z.length > 0) {
      toast.error(`${"User Already Exist"}`);
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } else {
      if (userData.password !== userData.confirmPassword) {
        toast.error(`${"Password and confirm password should match"}`);
      } else {
        // let result = await fetch(Sign_Up, {
        //   method: "post",
        //   body: JSON.stringify({ ...userData }),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
        // result = await result.json();
        // toast.success(`${"Sign Up successful"}`);
        // let x = [...userLocalStorageData];
        // x.push(userData.mobile);
        // setUserLocalStorageData(x);
        // //console.log(userLocalStorageData);
        // localStorage.setItem("MyBlogUser", JSON.stringify(x));
        // console.log(userLocalStorageData);
        // if (result) {
        //   setTimeout(() => {
        //     navigate("/login");
        //   }, 2500);
        // }
        sendSignUpData();
      }
    }
  }
  function changeHandler(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <ToastContainer />
      <div className="signUpForm">
        <div className="heading">
          <span>Sign Up</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="formData">
            <Input
              placeholder="Firstname"
              type="text"
              name="firstName"
              onChange={changeHandler}
            />

            <Input
              placeholder="Lastname"
              type="text"
              name="lastName"
              onChange={changeHandler}
            />
            <Input
              placeholder="Mobile number"
              type="number"
              name="mobile"
              onChange={changeHandler}
            />

            <Input
              placeholder="Email"
              type="email"
              name="email"
              onChange={changeHandler}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              onChange={changeHandler}
            />
            <Input
              placeholder="Confirm password"
              type="password"
              name="confirmPassword"
              onChange={changeHandler}
            />
            <div>
              <Button text="Sign up" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Signup;
