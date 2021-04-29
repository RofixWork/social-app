import React from "react";
import useStyles from "./style";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { auth } from "../../firebase/Config";
import { useSelector } from "react-redux";

const NavHome = () => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h5" className={classes.title}>
                MyApp
              </Typography>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <Typography className={classes.user} variant="subtitle2">
                  {user.displayName}
                </Typography>

                <Typography
                  onClick={() => auth.signOut()}
                  className={classes.signout}
                  variant="subtitle2"
                >
                  Log Out
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default NavHome;
