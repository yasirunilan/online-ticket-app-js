import { Router } from "express";
import authController from "../../controllers/authController.js";
import { validate } from "../../middlewares/validator.js";
import authSchema from "../../schema/auth.js";
import authenticate from "../../middlewares/authenticator.js";
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The authentication managing API
 */
const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginPayload:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *       example:
 *         email: "test@example.com"
 *         password: "Test@123"
 *     LoginResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: Access token
 *       example:
 *         token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUB0ZXN0LmNvbSIsImlhdCI6MTczODU3NzQ1OSwiZXhwIjoxNzQwOTk2NjU5fQ.R_uL-r0i_OIKQvK99rnN5q-clF8h8LTNUvqsjAccMRo"
 *     RegisterPayload: 
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - firstName
 *         - lastName
 *       properties:
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *         firstName:
 *           type: string
 *           description: First name of the user
 *         lastName:
 *           type: string
 *           description: Last name of the user
 *       example:
 *         email: "test@example.com"
 *         password: "Test@123"
 *         firstName: "John"
 *         lastName: "Doe"
 *     RegisterResponse:
 *       type: object
 *       properties:
 *          user:
 *           type: object
 *           description: User object
 *           properties:
 *             id:
 *               type: integer
 *               description: User ID
 *             email:
 *               type: string
 *               description: Email of the user
 *             firstName:
 *               type: string
 *               description: First name of the user
 *             lastName:
 *               type: string
 *               description: Last name of the user 
 *       example:
 *         user:
 *           id: 1
 *           email: "test@example.com"
 *           firstName: "John"
 *           lastName: "Doe"
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginPayload'
 *     responses:
 *       200:
 *         description: Login Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Incorrect credentials.
 *       500:
 *         description: Some server error
 */
router.post(
  "/login",
  validate(authSchema.loginSchema),
  authenticate("local"),
  authController.login
);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: User Registration
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterPayload'
 *     responses: 
 *       201:
 *         description: Registration Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
 *       400:
 *         description: Bad Request
 *       409:
 *         description: User already exists
 *       500:
 *         description: Some server error
 */ 
router.post(
  "/register",
  validate(authSchema.registerSchema),
  authController.register
);

export default router;
