import * as React from 'react';
import { Paper, Typography,Button,TextField} from '@mui/material';
import useStyles from './style'
import {useDispatch} from 'react-redux'
import {createStudent} from '../../action/student'

export default function Details(){

    const classes=useStyles();
    const dispatch=useDispatch();

    const [inputdata,setinputData]=React.useState({reg_no:"",stud_name:"",grade:"",section:""})
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createStudent(inputdata))
        console.log(inputdata)
    }
  return (
    <Paper className={classes.paper}>
            <Typography variant='h4' textAlign='center'>Create Student</Typography>  
        <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <TextField id="outlined-basic" value={inputdata.reg_no} label="Registration No" variant="outlined" fullWidth onChange={(event)=>{setinputData({...inputdata,reg_no:event.target.value})}}/>
      <TextField id="outlined-basic" value={inputdata.stud_name} label="Name" variant="outlined" fullWidth onChange={(event)=>{setinputData({...inputdata,stud_name:event.target.value})}}/>
      <TextField id="outlined-basic" value={inputdata.grade} label="Grade" variant="outlined" fullWidth onChange={(event)=>{setinputData({...inputdata,grade:event.target.value})}}/>
      <TextField id="outlined-basic" value={inputdata.section} label="Section" variant="outlined" fullWidth onChange={(event)=>{setinputData({...inputdata,section:event.target.value})}}/>
      <Button variant="contained" type='submit' fullWidth>Submit</Button>
      </form>
    </Paper>
  );
}








