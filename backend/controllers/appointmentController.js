// Convention: Use Uppercase 'Appointment' for Models
import Appointment from "../models/Appointment.js"; 
import Patient from "../models/Patient.js";

// ================= ADD NEW APPOINTMENT =================
export const addAppointment = async (req, res) => {
    try {
        const { patient, doctor, date, time, reason } = req.body;

        const newAppointment = await Appointment.create({
            patient,
            doctor,
            date,
            time,
            reason
        });

        res.status(201).json({
            message: "Appointment successfully created",
            appointment: newAppointment
        });
    } catch (error) {
        res.status(500).json({
            // FIXED: Was previously saying "Failed to add patient"
            message: "Failed to add appointment", 
            error: error.message
        });
    }
}

// ================= GET ALL APPOINTMENTS =================
export const getAppointments = async (req, res) => {
    try {
        // Fetch all appointments and use .populate() to get patient details
        const appointments = await Appointment.find().populate("patient");

        // Use 200 for successful GET requests (201 is for 'Created')
        res.status(200).json(appointments); 

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch appointments",
            error: error.message
        });
    }
}

// ================= DELETE APPOINTMENT =================
export const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        await Appointment.findByIdAndDelete(id);

        res.status(200).json({
            message: "Appointment successfully deleted"
        });
    } catch (error) {
        res.status(500).json({
            message: "Appointment was not deleted",
            error: error.message
        });
    }
}