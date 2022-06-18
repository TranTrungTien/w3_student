const mongoose = require("mongoose");

const DBConnect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      "secret key @@@@",
      { useNewUrlParser: true, useUnifiedTopology: true },
      (error) => {
        if (error) {
          console.log({ error });
          reject(false);
        } else {
          console.log("Connect to MongoDb Successfully");
          resolve(true);
        }
      }
    );
  });
};

module.exports = DBConnect;
