import patient from "../models/Patient.js";

// ================= ADD NEW PATIENT =================
export const addPatient = async (req, res) => {
  console.log(req.body);
  try {
    // Take data from request body (sent from frontend or Postman)
    const { name, age, gender, contact, disease } = req.body;

    // Create a new patient document in MongoDB
    const newPatient = await patient.create({
      name,
      age,
      gender,
      contact,
      disease
    });
    
    // Send success response
    res.status(201).json({
      message: "Patient added successfully",
      patient: newPatient
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add patient",
      error: error.message
    });
  }
};

// ================= GET ALL PATIENTS =================
export const getPatients = async (req, res) => {
  try {
    // Fetch all patients from MongoDB
    const patients = await patient.find();

    // Send patients to frontend
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch patients",
      error: error.message
    });
  }
};

// ================= DELETE PATIENT =================
export const deletePatient = async (req, res) => {
  try {
    // Get patient ID from URL
    const { id } = req.params;

    // Delete patient from database
    await patient.findByIdAndDelete(id);

    res.status(200).json({
      message: "Patient deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete patient",
      error: error.message
    });
  }
};