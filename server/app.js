const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dontenv = require("dotenv");
const cookieParser = require("cookie-parser");

const imageRouter = require("./routes/imageRoutes");

// env config
dontenv.config({ path: ".env" });
const PORT = process.env.PORT;
let dbURI = process.env.DATABASE_URL;

const connect = mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then(
  (db) => {
    console.log("Connected Successfully to Mongodb Server");
  },
  (err) => {
    console.log(err);
  }
);

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hi I am Server", data: "no data on this endpoint" });
});

app.use("/imageUpload", imageRouter);

app.listen(PORT, () => {
  console.log(`Listeninig on Port http://localhost:${PORT}`);
});
