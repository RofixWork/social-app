import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import { auth, db } from "./firebase/Config";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, getPosts } from "./app/reducers/UserSlice";
function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#111",
      },
    },
  });
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    //posts
    db.collection("posts")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        dispatch(
          getPosts(
            snp.docs.map((doc) => ({
              id: doc.id,
              title: doc.data().title,
              username: doc.data().username,
              image: doc.data().image,
            }))
          )
        );
      });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {!user ? (
          <LoginScreen />
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </>
        )}
      </ThemeProvider>
    </Router>
  );
}

export default App;
