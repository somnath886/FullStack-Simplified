import './App.css';
import {useContext} from 'react'
import {IndividualContext} from './dataHub'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function App() {

  const Context = useContext(IndividualContext)
  const {res} = Context

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    }
  })

  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple-table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {res.map(x => (
            <TableRow key={x.id}>
              <TableCell component="th" scope="row">{x.id}</TableCell>
              <TableCell align='right'>{x.first_name}</TableCell>
              <TableCell align='right'>{x.last_name}</TableCell>
              <TableCell align='right'>{x.email}</TableCell>
              <TableCell align='right'>{x.gender}</TableCell>
              <TableCell align='right'>{x.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default App;
