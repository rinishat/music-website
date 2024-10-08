// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const dbConn = require("./config/db");
// const Projects = require("./routes/projectRoute");
// // const Users = require("./routes/userRoute");
// app.use(express.json());
// // const dotenv = require('dotenv')
// // dotenv.config()
// // const corsconfig = {
// //     origin: process.env.CORSURL
// // };
// app.use(cors());
// const port = process.env.PORT || 7778;
// app.use("/projects", Projects);
// // app.use("/users", Users);

// app.get("/", (req, res) => {
//   res.status(200).json("Welcome");
// });

// app.listen(port, () => {
//   console.log(`Server running in : ${port}`);
// });

// // const path = require("path");
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname, "client/build")));
// //   app.get("*", (req, res) => {
// //     res.sendFile(path.join(__dirname, "client/build/index.html"));
// //   });
// // }
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const songRoutes = require('./routes/songs');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/songs', songRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));