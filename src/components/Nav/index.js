import React from "react";
import useStyles from "./style";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { openModel } from "../../app/reducers/GeneralSlice";
const Nav = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const open = () => {
    dispatch(openModel());
  };
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h5" className={classes.title}>
                MyApp
              </Typography>
            </Grid>
            <Grid item>
              <div>
                <Button onClick={open} className={classes.btn} variant="text">
                  register / login
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Nav;
