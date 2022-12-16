import  mongoose from 'mongoose';

const studentSchema=mongoose.Schema({
    reg_no:String,
    stud_name:String,
    grade:String,
    section:{
        type:String,
        default:'A'
    },
})

const student=mongoose.model('student',studentSchema)

export default student;


