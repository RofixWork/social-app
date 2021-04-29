import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useSelector } from "react-redux";
import Comment from "../Comment";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "15px 0",
  },
  media: {
    height: 0,
    paddingTop: "70.25%", // 16:9
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  avatar: {
    backgroundColor: "#111",
    fontSize: ".8rem",
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function Post() {
  const classes = useStyles();
  const { posts } = useSelector((state) => state.user);
  return (
    <>
      {posts.length
        ? posts.map((post) => {
            return (
              <Card className={classes.root} key={post.id}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {post.username.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={post.username}
                />
                <CardMedia
                  className={classes.media}
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography variant="subtitle2" color="primary" component="p">
                    {post.title}
                  </Typography>
                </CardContent>
                <Comment id={post.id} />
              </Card>
            );
          })
        : null}
    </>
  );
}
