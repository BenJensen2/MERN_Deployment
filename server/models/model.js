const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true,"is required"],
    minlength: [2, "Product name must be at least 2 characters in length"]
  },

  price: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
    minlength: [10, "Product description must have at least 10 characters"]
  }
},
{timestamps: true})

mongoose.model("Model",ModelSchema);