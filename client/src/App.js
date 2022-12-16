
import { AppBar, Container, Grid, Grow, Paper, Typography } from '@mui/material';
import React,{useEffect} from 'react'
import useStyles from './style'
import Details from './componenents/details/details'
import Form from './componenents/form/form'
import {useDispatch} from 'react-redux'
import {fetchStudent} from './action/student'


function App() {

  const dispatch=useDispatch();
  const classes=useStyles();

  useEffect(()=>{
    dispatch(fetchStudent())
  },[dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appbar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h3'>
          Student Management
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={7}>
               <Details />
              </Grid>
              <Grid item xs={12} md={4}>   
                <Form />
              </Grid>
          </Grid>
        </Container>

      </Grow>

    </Container>
  )
}

export default App










