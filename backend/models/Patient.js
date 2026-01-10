import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  disease: {
    type: String,
    required: true
  }
}, 
{timestamps: true})

const patient = mongoose.model("patient", patientSchema)

export default patient;
