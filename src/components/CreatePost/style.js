import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "white",
    padding: "14px 20px",
    "& .MuiInputLabel-root": {
      fontSize: ".8rem",
      color: "#111",
    },
    "& .MuiButton-contained": {
      fontWeight: 600,
    },
  },
  label: {
    cursor: "pointer",
  },
}));

export default useStyles;
