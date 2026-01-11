// Change 'patient' to 'Patient' in the import
import Patient from "../models/Patient.js"; 

// ================= ADD NEW PATIENT =================
export const addPatient = async (req, res) => {
  try {
    const { name, age, gender, contact, disease } = req.body;

    // Use 'Patient' (uppercase) to match the import above
    const newPatient = await Patient.create({ 
      name, 
      age, 
      gender, 
      contact, 
      disease 
    });

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
    // Change to Patient.find()
    const patients = await Patient.find();
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
    const { id } = req.params;

    // Change to Patient.findByIdAndDelete()
    await Patient.findByIdAndDelete(id);

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