import express from 'express'
import {getAll,getOne, create, deletenote, updatenote,archived,unarchived} from '../controllers/noteController.js';
const router = express.Router();

router.get("/:status",getAll);
router.get("/:id",getOne);
router.post("/create",create);
router.delete("/:id",deletenote);
router.put("/:id",updatenote);
router.put("/archived/:id",archived);
router.put("/unarchived/:id",unarchived);


export default router;