import { Router } from "express";
import bookingController from "../../controllers/bookingController.js";
import { validate } from "../../middlewares/validator.js";
import bookingSchema from "../../schema/booking.js";
import authenticate from "../../middlewares/authenticator.js";

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: The bookings managing API
 */
const router = Router();

router.post(
  "/add",
  validate(bookingSchema.createBookingSchema),
  authenticate("jwt"),
  bookingController.createBooking
);

router.post(
  "/cancel",
  validate(bookingSchema.cancelBookingSchema),
  authenticate("jwt"),
  bookingController.cancelBooking
);

export default router;
