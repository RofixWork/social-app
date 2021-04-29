import React from "react";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Typography from "@material-ui/core/Typography";
import { Button, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { toggleSign } from "../../app/reducers/GeneralSlice";
import { auth } from "../../firebase/Config";
// styles
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTypography-h5": {
      fontWeight: "bold",
    },
    "& .MuiInputLabel-root": {
      fontSize: ".8rem",
    },
    "& .MuiButton-root": {
      margin: "10px 0",
      textTransform: "capitalize",
    },
  },
  sign: {
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
// styles

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is Required"),
  email: Yup.string().email("Invalid Format").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password Incorrect"
  ),
});
const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const toggleForm = () => {
    dispatch(toggleSign());
  };
  const onSubmit = (values, action) => {
    const { username, email, password } = values;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        const user = userAuth.user;
        user.updateProfile({
          displayName: username,
        });
        dispatch(toggleSign());
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
        action.resetForm();
      });
  };
  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        SignUp Now
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(fomrik) => {
          return (
            <Form>
              <Field
                component={TextField}
                variant="outlined"
                label="Username"
                name="username"
                size="small"
                fullWidth
                margin="dense"
              />
              <Field
                component={TextField}
                variant="outlined"
                label="Email"
                name="email"
                size="small"
                fullWidth
                margin="dense"
              />
              <Field
                component={TextField}
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                size="small"
                fullWidth
                margin="dense"
              />
              <Field
                component={TextField}
                variant="outlined"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                size="small"
                fullWidth
                margin="dense"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign up
              </Button>
              <Typography variant="subtitle2">
                I have an account{" "}
                <span onClick={toggleForm} className={classes.sign}>
                  Sign In
                </span>
              </Typography>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUp;
