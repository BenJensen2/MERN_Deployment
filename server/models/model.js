const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"is required"],
    minlength: [3, "must be at least 3 characters in length"]
  },

  type: {
    type: String,
    required: [true,"is required"],
    minlength: [3, "must be at least 3 characters in length"]
  },

  description: {
    type: String,
    required: [true,"is required"],
    minlength: [3, "must be at least 3 characters in length"]
  },
  skills: {
    skill_1:{type: String},
    skill_2:{type: String},
    skill_3:{type: String},
  }
},
{timestamps: true})

mongoose.model("Model",ModelSchema);