import { Router } from "express";
import { StatusCodes } from "http-status-codes";

/**
 * @swagger
 * tags:
 *   name: Health
 *   description: The health check API
 */
const router = Router();


/**
 * @swagger
 * /health:
 *   get:
 *     summary: Get Health Status
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: App Works!!
 */
router.get("/", (req, res) => {
  return res.status(StatusCodes.OK).send("App Works!!");
});
export default router;
