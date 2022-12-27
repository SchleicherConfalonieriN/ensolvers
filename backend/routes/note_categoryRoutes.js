import express from 'express'
import {getAll, create, deletenote_category, updatenote_category} from '../controllers/note_categoryController.js';
const router = express.Router();

router.get("/",getAll);
router.post("/create",create);
router.delete("/:id",deletenote_category);
router.put("/:id",updatenote_category);


export default router;