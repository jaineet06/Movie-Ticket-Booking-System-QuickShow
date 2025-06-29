import express from "express";
import { protectAdmin } from "../middlewares/auth.js";
import { dashboardData, getAllBookings, getAllShows, isAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router()

adminRouter.get('/is-admin', protectAdmin, isAdmin)
adminRouter.get('/dashboard', protectAdmin, dashboardData)
adminRouter.get('/all-shows', protectAdmin, getAllShows)
adminRouter.get('/all-bookings', protectAdmin, getAllBookings)

export default adminRouter