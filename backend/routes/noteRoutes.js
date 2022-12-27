import express from 'express'
import {getAll, create, deletenote, updatenote} from '../controllers/noteController.js';
const router = express.Router();

router.get("/",getAll);
router.post("/create",create);
router.delete("/:id",deletenote);
router.put("/:id",updatenote);


export default router;