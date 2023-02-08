import express from 'express';
import './envfile.js';
import fileUpload from 'express-fileupload';
import swaggerUi from 'swagger-ui-express';
import swaggerAuth from './swaggerAuth.js';
import swaggerSpec from './swagger-config.js';
import './models/index.js';
import apiRouter from './routes.js';

const app = express();
app.use(fileUpload());
app.use('/api-docs', swaggerAuth, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', apiRouter);

export default app;
