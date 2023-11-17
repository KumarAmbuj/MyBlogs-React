const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("./db/config");
const User = require("./db/Users");
const Blog = require("./db/Blog");

const app = express();
app.use(express.json());
app.use(cors());
app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  let user = await User.findOne(req.body).select("-password");
  if (user) {
    resp.send(user);
  } else {
    resp.send({ result: null });
  }
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./images"); // Destination folder for uploaded files
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });

app.post("/add-blogs", async (req, resp) => {
  let blog = new Blog(req.body);
  let result = await blog.save();
  resp.send(result);
});
app.get("/get-blogs/category/:category", async (req, resp) => {
  let data = await Blog.find({ category: req.params.category });
  resp.send(data);
});
app.get("/get-blogs/:id", async (req, resp) => {
  let data = await Blog.find({ userId: req.params.id });
  resp.send(data);
});

app.get("/get-blogs", async (req, resp) => {
  let data = await Blog.find().limit(12);
  resp.send(data);
});

app.delete("/delete-blog/:id", async (req, resp) => {
  let data = await Blog.deleteOne({ _id: req.params.id });
  resp.send(data);
});

app.put("/edit-blog/:id", async (req, resp) => {
  let data = await Blog.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(data);
});
app.listen(5000);
