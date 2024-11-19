require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const keys = require("./config/keys");

// Express route
const bookRoute = require("./routes/book.route");
const userRoute = require("./routes/user.route");

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB database;
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }).then(() => {
//   console.log("Database successfully connected!");
// }).catch((error) => {
//   console.log(`Database not connected: ${error}`);
// });
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT} \n Database Connected`)))
  .catch((error) => console.log(error.message));
mongoose.set("useCreateIndex", true);

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/", bookRoute);
app.use("/users", userRoute);

// Port
// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Server is listening at port ${port}`);
// });
