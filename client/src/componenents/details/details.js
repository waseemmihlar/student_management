
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector,useDispatch} from 'react-redux'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteStudent} from '../../action/student'

const Details=()=>{

  const students=useSelector(state=>state.Student)

  const dispatch=useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Reg-No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.reg_no}
              </TableCell>
              <TableCell align="right">{row.stud_name}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
              <TableCell align="right">{row.section}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" size="medium" onClick={()=>dispatch(deleteStudent(row._id))}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default Details