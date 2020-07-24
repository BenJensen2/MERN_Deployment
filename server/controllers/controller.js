const mongoose = require("mongoose");
const Model = mongoose.model("Model");

module.exports = {
  index: (req, res) => {
    console.log("Index pinggg-ed");
    res.json({
      // Our response to this function being called
      message: "Hello World",
    });
  },

  getModels: (req, res) => {
    Model.find()
      .then((model) => {
        // model is the parameter passed into .then function
        console.log("We are in model.find");
        res.json(model); // responding with a .json object of the model
      })
      .catch((err) => res.status(400).json(err)); //res.status(400).json(err)
  },

  createModel: (req, res) => {
    console.log("We are creating a model");
    console.log(req.body);
    Model.create(req.body)
      .then((model) => {
        console.log("Product Created");
        res.json(model);
      })
      .catch((err) => res.status(400).json(err)); //res.status(400).json(err)
  },

  getModelByid: (req, res) => {
    Model.findOne({ _id: req.params.id })
      .then((model) => {
        // model is the parameter passed into .then function
        console.log("We found the model!");
        res.json(model); // responding with a .json object of the model
      })
      .catch((err) => res.status(400).json({message:"Unable to find a model with that id"}));
  },

  updateModel: (req, res) => {
    console.log("Update Product");
    Model.findOneAndUpdate({ _id: req.params.id }, req.body, {
      runValidators: true,
      new: true,
    })
      .then((model) => {
        // model is the parameter passed into .then function
        console.log("We found the model!");
        res.json(model); // responding with a .json object of the model
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteModel: (req, res) => {
    Model.deleteOne({ _id: req.params.id })
      .then((response) => res.json(response))
      .catch((err) => res.status(400).json(err));
  },
};
