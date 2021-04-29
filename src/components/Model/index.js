import React from "react";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import SignIn from "../sign/SignIn";
import SignUp from "../sign/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../../app/reducers/GeneralSlice";
const Model = () => {
  const classes = useStyles();
  const { signin } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  const close = () => {
    dispatch(closeModel());
  };
  return (
    <>
      <div onClick={close} className={classes.model}>
        <Container maxWidth="sm">
          <div
            className={classes.modelContent}
            onClick={(e) => e.stopPropagation()}
          >
            {signin ? <SignUp /> : <SignIn />}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Model;
