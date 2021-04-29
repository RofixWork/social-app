import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    color: "white",
    height: 70,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: 700,
    cursor: "pointer",
  },
  btn: {
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: ".9rem",
  },
}));

export default useStyles;
