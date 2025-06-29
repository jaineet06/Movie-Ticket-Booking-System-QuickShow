import express from "express";
import { getFavourites, getUserBookings, updateFavourites } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.get('/bookings', getUserBookings)
userRouter.post('/update-favourites', updateFavourites)
userRouter.get('/get-favourites', getFavourites)

export default userRouter