import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",     // connects this to Patient model
      required: true
    },
    doctor: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    reason: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: "Pending"   // Pending / Confirmed / Completed
    }
  },
  { timestamps: true }
)

const appointment = mongoose.model("appointment", appointmentSchema)

export default appointment