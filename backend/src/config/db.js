const mongoose = require("mongoose");
require("dotenv").config();
const password = process.env.PASSWORD;
const connect = () => {
  return mongoose.connect(
    `mongodb+srv://AleemAlam:${password}@cluster0.ow6iu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
