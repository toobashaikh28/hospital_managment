/*     server.js is like the main control center of your backend:
1- Loads config
2- Connects to database
3- Sets up Express app & middleware
4- Defines routes
5- Starts the server */


// ================= IMPORT DEPENDENCIES =================
import express from "express"       // Express framework for building API
import cors from "cors"             // CORS middleware to handle cross-origin requests
import dotenv from "dotenv"         // dotenv to load environment variables

import connectDB from "./config/db.js"  // Import our MongoDB connection function
import patientRoutes from "./routes/patientRoutes.js"   // Patient routes
import appointmentRoutes from "./routes/appointmentRoutes.js"  // Appointment routes

// ================= CONFIGURATION =================
dotenv.config()    //load environment variables from .env file

// ================= CONNECT TO DATABASE =================
connectDB()       //call async fuction to connect db

// ================= INITIALIZE EXPRESS APP =================
const app = express()

// ================= MIDDLEWARE =================
app.use(cors())           //enable cors from all routes
app.use(express.json())   //parse incoming json request so you can access req.body

// ================= ROUTES =================
app.use("/api/patients", patientRoutes);  // Route for patient-related API requests
app.use("/api/appointments", appointmentRoutes)  // Route for appointment-related API requests

// ================= START SERVER =================
const PORT = process.env.PORT || 5000; // default to 5000 if PORT not set
app.listen(PORT, ()=>{
    console.log(`server runnig on ${PORT}`)
})