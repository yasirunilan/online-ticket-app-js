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

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateBookingRequest:
 *       type: object
 *       properties:
 *         eventId:
 *           type: string
 *     CreateBookingResponse:
 *       type: object
 *       properties:
 *         booking:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             eventId:
 *               type: integer
 *             userId:
 *               type: integer
 *             status:
 *               type: string
 *             createdAt:
 *               type: string
 *             updatedAt:
 *               type: string
 *     CancelBookingRequest:  
 *       type: object
 *       properties:
 *         bookingId:
 *           type: string
 *     CancelBookingResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 */ 



/**
 * @swagger
 * /booking/add:
 *   post:
 *     summary: Create a new booking
 *     tags: [Booking]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateBookingRequest'
 *     responses:
 *       201:
 *         description: The booking was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateBookingResponse' 
 *       500:
 *         description: Some server error
 */
router.post(
  "/add",
  validate(bookingSchema.createBookingSchema),
  authenticate("jwt"),
  bookingController.createBooking
);

/**
 * @swagger
 * /booking/cancel:
 *   post:
 *     summary: Cancel a booking
 *     tags: [Booking]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CancelBookingRequest'
 *     responses:
 *       200:
 *         description: The booking was successfully canceled 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CancelBookingResponse'
 *       500:
 *         description: Some server error
 */ 
router.post(
  "/cancel",
  validate(bookingSchema.cancelBookingSchema),
  authenticate("jwt"),
  bookingController.cancelBooking
);

export default router;
