import { TextField, Paper, Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./style";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { storage, db } from "../../firebase/Config";
import firebase from "firebase";
import { useSelector } from "react-redux";
const CreatePost = () => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const [postContent, setPostContent] = useState("");
  const chooseFile = (e) => {
    setFile(e.target.files[0]);
  };

  const create = () => {
    if (file && postContent) {
      const upload = storage.ref(`images/${file.name}`).put(file);

      upload.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("posts").add({
                title: postContent,
                image: url,
                username: user.displayName,
                currentTime: firebase.firestore.FieldValue.serverTimestamp(),
              });
            });
        }
      );

      setFile(null);
      setPostContent("");
    } else {
      alert("Please Fill Data...");
    }
  };

  return (
    <Paper className={classes.root}>
      <TextField
        variant="outlined"
        color="primary"
        label="Write Anything..."
        fullWidth
        size="small"
        margin="dense"
        multiline
        rows={4}
        rowsMax={20}
        required
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <Box
        marginTop={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={chooseFile}
            required
          />
          <label
            htmlFor="file"
            className={classes.label}
            title={"Select Picture"}
          >
            <PhotoCameraIcon color="primary" />
          </label>
        </div>
        <div>
          <Button
            onClick={create}
            variant="contained"
            color="primary"
            size="small"
          >
            create
          </Button>
        </div>
      </Box>
    </Paper>
  );
};

export default CreatePost;
