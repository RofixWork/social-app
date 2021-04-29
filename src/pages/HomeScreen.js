import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import CreatePost from "../components/CreatePost";
import NavHome from "../components/NavHome";
import Post from "../components/Post";
const HomeScreen = () => {
  return (
    <div>
      <NavHome />
      <Box marginTop="90px">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={7} xs={12}>
              <CreatePost />
              <Post />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default HomeScreen;
