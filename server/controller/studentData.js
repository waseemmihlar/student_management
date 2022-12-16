import model from '../model/student.js'
import mongoose from 'mongoose'

export const getStudent=async (req,res)=>{
    try {
        const getstudent=await model.find()
        res.status(200).json(getstudent)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createStudent=async(req,res)=>{
    const data=req.body;
    const newdata=new model(data)
    try {
        await newdata.save();
        res.status(201).json(newdata)
        
    } catch (error) {
        res.status(409).json(error.message)
    }

}
export const deleteStudent=async(req,res)=>{
    const {id:_id}=req.params;
    // const id=req.params.id
    
    if(!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send("The ID has no post")

    await model.findByIdAndRemove(_id)
    res.json({message:'Content deleted successfully'})
}


