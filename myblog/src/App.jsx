import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddBlogs from "./pages/AddBlog";
import MyBlog from "./pages/MyBlog";
import "./App.css";
import Home from "./screen/home";
import Layout from "./component/layout";
import Category from "./pages/Category";
import CategoryWiseBlog from "./pages/CategoryWiseBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  const [user, setUser] = useState({});
  function updateUser(user) {
    setUser(user);
  }
  return (
    <Routes>
      <Route path="/" element={<Layout user={user} updateUser={updateUser} />}>
        <Route
          index
          element={<HomePage user={user} updateUser={updateUser} />}
        />
        <Route
          path="/about"
          element={<About user={user} updateUser={updateUser} />}
        />
        <Route
          path="/contact"
          element={<About user={user} updateUser={updateUser} />}
        />
        <Route
          path="/category"
          element={<Category user={user} updateUser={updateUser} />}
        />
        <Route
          path="/my-blog"
          element={<MyBlog user={user} updateUser={updateUser} />}
        />
        <Route
          path="/sign-up"
          element={<Signup user={user} updateUser={updateUser} />}
        />
        <Route
          path="/login"
          element={<Login user={user} updateUser={updateUser} />}
        />
        <Route
          path="/add-blogs"
          element={<AddBlogs user={user} updateUser={updateUser} />}
        />
        <Route
          path="/blog"
          element={<Blog user={user} updateUser={updateUser} />}
        />
        <Route
          path="/category-wise-blog"
          element={<CategoryWiseBlog user={user} updateUser={updateUser} />}
        />
        <Route
          path="/edit-blog"
          element={<EditBlog user={user} updateUser={updateUser} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
