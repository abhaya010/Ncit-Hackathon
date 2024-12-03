require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("http://127.0.0.1:5173/"));

app.use(
  session({
    name: "sessionId",
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./index.html"));
// });

const usersRouter = require("./routes/users");
const commentsRouter = require("./routes/comments");
const postsRouter = require("./routes/posts");
const loginUser = require("./routes/login");
const logoutUser = require("./routes/logout");
app.use("/users", usersRouter);
app.use("/comments", commentsRouter);
app.use("/posts", postsRouter);
app.use("/login", loginUser);
app.use("/logout", logoutUser);

app.listen(3000, () => console.log("Server Started"));
