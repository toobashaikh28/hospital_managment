import express from "express"
import { addAppointment,getAppointments,deleteAppointment } from "../controllers/appointmentController.js"

const router = express.Router()

router.post("/",addAppointment)
router.get("/",getAppointments)
router.delete("/:id",deleteAppointment)

export default router