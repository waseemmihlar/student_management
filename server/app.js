import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import route from './routes/route.js'


const app=express();

dotenv.config({
    path:'./.env'
})

const port=process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({limit:'30mb',extended:true})) //express.json
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))

app.use('/student',route)

const contained={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTION_URL,contained)
        .then(()=>app.listen(port,()=>{
            console.log(`Server Running on port ${port}`)
        })).catch(err=>console.log(err))

mongoose.set('strictQuery', true);

