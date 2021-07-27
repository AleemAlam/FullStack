import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const convertImg = (path) => {
  return require(path);
};
export default function MyTable({ teachers, handleTeacherClick }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Teacher Name</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Subject</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher) => {
            return (
              <StyledTableRow
                onClick={() => handleTeacherClick(teacher._id)}
                key={teacher._id}
              >
                <StyledTableCell component="th" scope="row">
                  {teacher.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {teacher.gender}
                </StyledTableCell>
                <StyledTableCell align="right">{teacher.age}</StyledTableCell>
                <StyledTableCell align="right">
                  {teacher.subject}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
