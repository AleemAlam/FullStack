import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function MenuAppBar() {
  const classes = useStyles();

  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar className={classes.navLayout}>
          <div>
            <Typography variant="h5">School Management System</Typography>
          </div>

          {!isAuth ? (
            <Link style={{ color: "white" }} to="/login">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
                <Typography variant="body1">Login</Typography>
              </IconButton>
            </Link>
          ) : (
            <Link style={{ color: "white" }} to="/login">
              <Typography variant="body1">Logout</Typography>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
