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

router.post(
  "/add",
  validate(eventSchema.createEventSchema),
  authenticate("jwt"),
  eventController.createEvent
);

// public endpoint

router.get(
  "/:eventId",
  validate(eventSchema.getEventSchema, "params"),
  eventController.getEvent
);

export default router;
