const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/datingapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  bio: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/like/:id/:targetId", async (req, res) => {
  const user = await User.findById(req.params.id);
  const target = await User.findById(req.params.targetId);

  if (!user || !target) return res.status(404).send("User not found");

  user.likes.push(target._id);
  await user.save();

  if (target.likes.includes(user._id)) {
    res.json({ message: "It's a match!", user, target });
  } else {
    res.json({ message: "User liked successfully", user });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
