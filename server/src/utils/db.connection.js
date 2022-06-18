const mongoose = require("mongoose");

const DBConnect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      "mongodb+srv://trantrungtien:Matkhau12345@cluster0.mlapa.mongodb.net/students_management_ghtk?retryWrites=true&w=majority",
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
