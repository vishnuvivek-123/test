/* eslint-disable max-lines */
import express from 'express';
import controller from './controller.js';

const router = express.Router();

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Auth
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                format: email
 *                required: true
 *              first_name:
 *                type: string
 *                required: true
 *              last_name:
 *                type: string
 *                required: true
 *              photo:
 *                type: file
 *                required: false
 *                description: Profile photo
 *     responses:
 *       200:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *
 */
router.post('/', controller);

export default router;
