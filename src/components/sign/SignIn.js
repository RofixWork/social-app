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
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Format").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //Submit Form
  const onSubmit = (values, action) => {
    const { email, password } = values;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {})
      .catch((error) => {
        console.log(error);
        action.resetForm();
        alert(error);
      });
  };
  //toggle Form (true or false)
  const toggleForm = () => {
    dispatch(toggleSign());
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        SignIn Now
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
              <Typography variant="subtitle2">
                Don't have an account{" "}
                <span className={classes.sign} onClick={toggleForm}>
                  Sign Up
                </span>
              </Typography>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;
