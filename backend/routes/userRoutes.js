import express from 'express'
import {Register,Login, updateuser} from '../controllers/userController.js';
const router = express.Router();


router.post("/login",Login);
router.post("/register",Register);
router.put("/",updateuser);


export default router;