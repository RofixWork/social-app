import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    color: "white",
    height: 70,
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 9999,
  },
  title: {
    fontWeight: 700,
    cursor: "pointer",
  },
  user: {
    fontWeight: 600,
    cursor: "pointer",
  },
  signout: {
    marginLeft: 20,
    fontWeight: 700,
    cursor: "pointer",
    backgroundColor: "white",
    padding: "3px 15px",
    color: "#111",
    borderRadius: 20,
    fontSize: ".8rem",
  },
}));

export default useStyles;
