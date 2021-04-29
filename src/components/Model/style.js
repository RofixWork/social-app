import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  model: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,.6)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modelContent: {
    padding: "15px 20px",
    backgroundColor: "white",
    borderRadius: "5px",
  },
}));

export default useStyles;
