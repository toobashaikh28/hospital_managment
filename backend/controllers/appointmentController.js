import appointment from "../models/Appointment.js";

// ================= ADD NEW APPOINTMENT =================
export const addAppointment = async (req, res) => {
    try{
        const {patient, doctor, date, time, reason} = req.body;

        const newAppointment = await appointment.create({
            patient,
            doctor,
            date,
            time,
            reason
        })

        res.status(201).json({
            message: "Appointment is succesfully created",
            appointment: newAppointment
        })
    }catch(error){
        res.status(500).json({
            message: "Failed to add patient",
            error: error.message
        })
    }
}

// ================= GET ALL APPOINTMENTS =================
export const getAppointments = async (req,res) => {
    try{
        // Fetch all appointments from MongoDB
        const appointments = await appointment.find();

        res.status(201).json(appointments)

    }catch(error){
        res.status(500).json({
            message: "failed to fetch appointments",
            error: error.message
        })
    }
}


// ================= DELETE APPOINTMENT =================
export const deleteAppointment = async (req,res) =>{
    try{
    // Get appointment ID from URL
    const { id } = req.params;

    await appointment.findByIdAndDelete(id);

    res.status(200).json({
        message: "Appointment is succesfully deleted"
    })
}catch(error){
    res.status(500).json({
        message: "Appoinetment is not deleted",
        error: error.message
    })
}
}