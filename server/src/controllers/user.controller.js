const User = require("../models/user.model");

const save = async (req, res) => {
  const { userName, fullName, email, birthDay } = req.body;
  console.log({ userName, fullName, email, birthDay });
  try {
    const user = User({
      userName,
      fullName,
      email,
      birthDay,
    });
    await user.save();
    res.status(201).send("ok");
  } catch (error) {
    res.status(500).send({ error });
  }
};
const getAll = (req, res) => {
  User.find({}, null, null, (err, result) => {
    if (err) res.status(500).send("Something went wrong");
    else res.status(200).send(result);
  });
};

const getById = (req, res) => {
  const id = req.query.id;
  User.findById(id, null, null, (err, result) => {
    if (err) res.status(404).send("not found");
    else res.status(200).send(result);
  });
};

const update = (req, res) => {
  const { _id, ...user } = req.body;

  User.findByIdAndUpdate(_id, user, null, (err, doc) => {
    if (err) {
      res.status(500).send(err);
    } else res.status(200).send(doc);
  });
};

const deleteUser = (req, res) => {
  const { id } = req.query;
  User.findByIdAndDelete({ _id: id }, null, (err, doc) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(doc);
    }
  });
};
const userControllers = {
  save,
  getAll,
  getById,
  update,
  deleteUser,
};

module.exports = userControllers;
