import express from "express"
import {
  addPatient,
  getPatients,
  deletePatient
} from "../controllers/patientController.js";

const router = express.Router()

router.post("/",addPatient)
router.get("/", getPatients)
router.delete("/:id", deletePatient)

export default router