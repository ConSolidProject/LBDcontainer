import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import {
  login,
  Session
} from "@inrupt/solid-client-authn-browser";

import {
  TextField,
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";

import { getAuthentication } from "../functions";
// import { getMyProjects } from "consolid";

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ session, setSession }) {
  const classes = useStyles();
  const [guest, setGuest] = useState(false);
  const [oidcIssuer, setOidcIssuer] = useState("http://localhost:5000");
  const [loading, setLoading] = useState(false);

  // this function only runs when the component mounts. If the mount is the result of a redirect from a Solid Identity Provider, the Session is verified and extracted, and the user is authenticated.
  useEffect(() => {
    setLoading(true)
    getAuthentication(session, setSession).then(() => setLoading(false));
  }, []);

  // This function is called when the login button is clicked. If the user logs in as a guest, an unauthenticated solid session is created.
  const onLoginClick = async (e) => {
    setLoading(true);
    await login({
      oidcIssuer,
      redirectUrl: window.location.origin + "/dashboard",
      clientName: "lbdserver",
    });
  };

  const onLogoutClick = async (e) => {
    try {
      // await getMyProjects()
      setLoading(true)
      if (session.info.isLoggedIn) {
        localStorage.clear()
        setSession(new Session())
      }
      setLoading(false)
    } catch (error) {
      console.log(`error`, error)
      setLoading(false)
    }
  }

  return (
    <React.Fragment>
      {loading ? (
        <CircularProgress
          style={{ marginTop: 200, position: "absolute", left: "50%" }}
          size="80px"
          color="secondary"
        />
      ) : (
        <Container
          className={classes.paper}
          component="main"
          maxWidth="xs"
          style={{ marginTop: 150 }}
        >
          {session.info.isLoggedIn ? (<div>
            <Redirect to="/"></Redirect>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onLogoutClick}
            >
              Log out
            </Button> */}
          </div>) : (<div>
            <Typography component="h1" variant="h3" align="center">
            Log in
          </Typography>
          <form
            onSubmit={(e) => e.preventDefault()}
            className={classes.form}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={oidcIssuer}
              onChange={(e) => setOidcIssuer(e.target.value)}
              id="idp"
              label="Identity Provider"
              name="idp"
              autoFocus
              disabled={guest}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onLoginClick}
            >
              Sign In
            </Button>
            <Typography style={{marginTop: 40}}>Register <a href={`${oidcIssuer}/idp/register/`} target="_blank">here</a> if you do not have a WebID yet</Typography>
      </form>
            </div>)}
        </Container>
      )}
    </React.Fragment>
  );
}
