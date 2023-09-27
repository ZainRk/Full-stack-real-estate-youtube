import express from "express";
import {  bookVisit,  cancelBooking, createUser,getAllBookings, getAllFavorites, toFav,} from "../controllers/userCntrl.js";
// import jwtCheck from "../config/auth0Config.js";
const router = express.Router();

//router.post("/register", jwtCheck, createUser);
//router.post("/bookVisit/:id", jwtCheck, bookVisit);
router.post("/register",  createUser);
router.post("/bookVisit/:id",  bookVisit);
router.post("/allBookings", getAllBookings);
//router.post("/removeBooking/:id", jwtCheck, cancelBooking);
//router.post("/toFav/:rid", jwtCheck, toFav);
//router.post("/allFav/", jwtCheck, getAllFavorites);
router.post("/removeBooking/:id",  cancelBooking);
router.post("/toFav/:rid",  toFav);
router.post("/allFav/",  getAllFavorites);
export { router as userRoute };
