import { Router } from "express";
import eventController from "../../controllers/eventController.js";
import { validate } from "../../middlewares/validator.js";
import eventSchema from "../../schema/event.js";
import authenticate from "../../middlewares/authenticator.js";

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: The events managing API
 */

const router = Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     CreateEventRequest:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - totalTickets
 *         - availableTickets
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the event
 *         description:
 *           type: string
 *           description: Description of the event
 *         totalTickets:
 *           type: number
 *           description: Total number of tickets
 *       example:
 *         name: "Event 1"
 *         description: "Description of event 1"
 *         totalTickets: 100
 *     CreateEventResponse:
 *       type: object
 *       properties:
 *         event:
 *           type: object
 *           description: Event object
 *           properties:
 *             id:
 *               type: number
 *               description: Event ID
 *             name:
 *               type: string
 *               description: Name of the event
 *             description:
 *               type: string
 *               description: Description of the event
 *             totalTickets:
 *               type: number
 *               description: Total number of tickets
 *             availableTickets:
 *               type: number
 *               description: Available number of tickets
 *       example:
 *         event:
 *           id: 1
 *           name: "Event 1"  
 *           description: "Description of event 1"
 *           totalTickets: 100
 *           availableTickets: 50
 */ 

/**
 * @swagger
 * /event/add:
 *   post:
 *     summary: Create a new event
 *     tags: [Event]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateEventRequest'
 *     responses:
 *       201:
 *         description: Event created successfully
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateEventResponse'
 *       400:
 *         description: Bad Request
 *       401: 
 *         description: Unauthorized
 *       409:
 *         description: Event already exists
 *       500:
 *         description: Some server error
 */
router.post(
  "/add",
  validate(eventSchema.createEventSchema),
  authenticate("jwt"),
  eventController.createEvent
);

// public endpoint

/**
 * @swagger
 * /event/:eventId:
 *   get:
 *     summary: Get an event by ID
 *     tags: [Event]
 *     parameters:
 *       - name: eventId
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Event fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetEventResponse'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Event not found
 *       500:
 *         description: Some server error
 */ 
router.get(
  "/:eventId",
  validate(eventSchema.getEventSchema, "params"),
  eventController.getEvent
);

export default router;
