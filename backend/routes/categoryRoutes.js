import express from 'express'
import {getAll, create, deletecategory, updatecategory} from '../controllers/categoryController.js';
const router = express.Router();

router.get("/",getAll);
router.post("/create",create);
router.delete("/:id",deletecategory);
router.put("/:id",updatecategory);


export default router;