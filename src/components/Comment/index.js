import { makeStyles, TextField, Box, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/Config";
import firebase from "firebase";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-root": {
      fontSize: ".8rem",
    },
    "& .MuiFilledInput-input, & .MuiInputBase-root": {
      backgroundColor: "#f4f4f4",
      fontSize: ".9rem",
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: 700,
      fontSize: ".9rem",
      fontStyle: "italic",
    },
  },
}));

const Comment = ({ id }) => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [getComment, setGetComment] = useState([]);
  const postComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      if (e.keyCode === 13) {
        db.collection("posts").doc(id).collection("comments").add({
          comment,
          username: user.displayName,
          currentTime: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setComment("");
      }
    } else {
      alert("Plaese Write Comment...");
    }
  };
  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .collection("comments")
      .orderBy("currentTime", "asc")
      .onSnapshot((snp) => {
        setGetComment(snp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);

  return (
    <div className={classes.root}>
      {getComment.map((comment) => {
        return (
          <Box
            key={comment.id}
            marginBottom="10px"
            paddingLeft="16px"
            display="flex"
            alignItems="center"
          >
            <div>
              <Typography variant="subtitle1">{comment.username}</Typography>
            </div>
            <Box marginLeft="8px">
              <Typography variant="subtitle2" color="primary">
                {comment.comment}
              </Typography>
            </Box>
          </Box>
        );
      })}

      <div>
        <TextField
          variant="filled"
          color="primary"
          label="Comment"
          size="small"
          fullWidth
          multiline
          rows={1}
          rowsMax={10}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyUp={postComment}
        />
      </div>
    </div>
  );
};

export default Comment;
