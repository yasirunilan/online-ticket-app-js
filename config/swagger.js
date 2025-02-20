import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ticket Manager API',
      version: '1.0.0',
      description: 'This is the API documentation for the Ticket Manager Backend',
    },
    components: {
      securitySchemes: {
        bearerAUth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
  },
  apis: ['./routes/v1/*.js', './models/*.js'],
};

const specs = swaggerJsdoc(options);

const swaggerRouter = Router();
swaggerRouter.use('/', swaggerUi.serve, swaggerUi.setup(specs));

export default swaggerRouter;