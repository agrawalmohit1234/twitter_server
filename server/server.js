require("dotenv").config();
const app = require("./express");
const mongoose = require("mongoose");

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", process.env.PORT);
});

mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection is Successfull ..........");
  })
  .catch((e) => {
    console.log(e);
    console.log("No connection");
  });
