import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../monogdb/models/post.js';

dotenv.config();

const router = express.Router();

// Define your routes and middleware here

export default router;  // Export the router object
