import CheckToken from './middleware/middlewares.js';
import express from 'express';
import category from "categoryRoutes.js"
import note from "noteRoutes.js"
import user from "userRoutes.js"
import note_category from "note_categoryRoutes.js"

const router = express.Router();
router.use("/user",user)
router.use("/note",CheckToken,note)
router.use("/category",CheckToken,category)
router.use("/note_category",CheckToken,note_category)

export default router