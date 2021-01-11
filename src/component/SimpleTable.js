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
import { getExpend } from '../api/ApiService';


const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

const createData = (pid, name, count) => {
  return { pid, name, count};
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
  createData('1','휴지',12),
  createData('2','치약',11),
  createData('3','물',22),
  createData('4','휴지2',15),
  createData('5','치약2',12),
  createData('6','물2',14),
  createData('7','휴지3',13),
  createData('8','치약3',10),
  createData('9','물3',18),
  createData('10','휴지4',22),
];

export default function SimpleTable() {

  const classes = useStyles();
  const history = useHistory();

  const deleteRow = (index) => {
    alert(index+'번째가 삭제 되었습니다');
  }

  const updateSection = () => {
    getExpend().then(res => {
      const data = res.data;
      if(data.code === '3001'){
        history.push("/UptSection");
      }else if(data.code === '3002'){
        alert('parameter정보 없음');
      }
      console.log(res); // response 값 출력
      console.log(data); // response의 data 값 출력
    }).catch(err => {
      console.error(err); // Error 출력
    });
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
          {rows.map((row,index) => (
            <TableRow key={index}>
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
                <IconButton aria-label="delete" onClick={() => deleteRow(index)}>
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