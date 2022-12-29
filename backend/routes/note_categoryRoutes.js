import express from 'express'
import {getAll, create, deletenote_category} from '../controllers/note_categoryController.js';
const router = express.Router();

router.get("/:id",getAll);
router.post("/create",create);
router.delete("/:id",deletenote_category);



export default router;