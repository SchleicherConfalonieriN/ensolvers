import express from 'express'
import {getAll,getArchived, create, deletenote, updatenote,archived,unarchived} from '../controllers/noteController.js';
const router = express.Router();

router.get("/",getAll);
router.get("/archived",getArchived);
router.post("/create",create);
router.delete("/:id",deletenote);
router.put("/:id",updatenote);
router.put("/archived/:id",archived);
router.put("/unarchived/:id",unarchived);


export default router;