import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PaginationLink from './paginationLink';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

const createData = (name, count) => {
  return { name, count};
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#339900',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 10,
  },
}))(TableCell);

const rows = [
  createData('휴지',12),
  createData('치약',11),
  createData('물',22),
  createData('휴지2',15),
  createData('치약2',12),
  createData('물2',14),
  createData('휴지3',13),
  createData('치약3',10),
  createData('물3',18),
  createData('휴지4',22),
];

export default function SimpleTable() {

  const classes = useStyles();
  const history = useHistory();

  const deleteRow = (key) => {
    alert(key+'번째가 삭제 되었습니다');
  }

  const updateSection = (key) => {
    history.push("/UptSection");
  }

  return (
    <TableContainer component={Paper} style={{marginBottom: '10vh'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>이름</StyledTableCell>
            <StyledTableCell align="right">갯수</StyledTableCell>
            <StyledTableCell align="right">수정</StyledTableCell>
            <StyledTableCell align="right">삭제</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,key) => (
            <TableRow id={key}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {row.count}개
              </TableCell>
              <TableCell align="right">
                <IconButton aria-label="update" onClick={updateSection}>
                  <CreateIcon />
                </IconButton>  
              </TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" onClick={() => deleteRow(key)}>
                  <DeleteIcon />
                </IconButton>  
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationLink />
    </TableContainer>
  );
}