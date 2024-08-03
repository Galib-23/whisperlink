import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';
import { getSidebarUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", protectRoute, getSidebarUsers);

export default router;