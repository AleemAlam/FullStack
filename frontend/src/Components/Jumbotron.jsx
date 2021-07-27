import { Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "left",
    marginTop: "100px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLayout: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Jumbotron() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h3">
        Welcome To Student Management System.
      </Typography>
      <Typography variant="p">Please Login to see your data.</Typography>
    </Container>
  );
}
