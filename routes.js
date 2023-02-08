import express from 'express';
import awsUpload from './api/s3/index.js';

const router = express.Router();

router.use('/upload', awsUpload);

export default router;
