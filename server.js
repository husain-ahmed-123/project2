const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override");
const { MongoStore } = require("connect-mongo");
const connectToDB = require("./db.js");
const requestController = require("./routes/request.routes.js");
const reviewController = require("./routes/review.routes.js");
const requestDetails = require("./routes/request.details.js");

const isSignedIn = require("./middleware/is-signed-in.js");
const passUserToView = require("./middleware/pass-user-to-view.js");

const authController = require("./routes/auth.routes.js");
const indexController = require("./routes/index.routes.js");
const carController = require("./routes/car.register.js");
const requsetController = require("./routes/request.details.js");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,

    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: "sessions",
    }),

    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);
app.use(passUserToView);

app.use("/auth", authController);
app.use("/", indexController);
app.use("/requests", requestController);
app.use("/reviews", reviewController);
app.use("/cars", carController);

async function startServer() {
  const PORT = process.env.PORT || 3000;
  await connectToDB();

  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
}

startServer();
