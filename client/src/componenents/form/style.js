import {makeStyles} from "@mui/styles";
import {createTheme} from '@mui/material/styles'

const theme=createTheme()

export default makeStyles(()=>({

    root:{
        '& .MuiTextField-root':{
            margin:theme.spacing(1)
        }
    },
    paper:{
        padding:theme.spacing(2),    
    },
    form:{
        display: 'flex',
        FlexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
   
}))


