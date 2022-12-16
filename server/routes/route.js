import express from "express";
import {getStudent,createStudent,deleteStudent} from '../controller/studentData.js'
const router=express.Router();


router.get('/',getStudent);
router.post('/',createStudent);
router.delete('/:id',deleteStudent);

export default router;

