import React, {useState, useEffect} from "react";
import { Typography, Button } from "@material-ui/core";
import ProjectSelection from "./components/ProjectSelection";
import { getAuthentication } from "../auth/functions";
import { useRecoilState } from "recoil";
import {trigger as t, session as sess} from '../../atoms'

const Plugin = ({ setProjects, projects }) => {
  const [session, setSession] = useRecoilState(sess)

  const [loading, setLoading] = useState(false)
    // this function only runs when the component mounts. If the mount is the result of a redirect from a Solid Identity Provider, the Session is verified and extracted, and the user is authenticated.
    useEffect(() => {
      setLoading(true)
      getAuthentication(session, setSession).then(() => setLoading(false));
    }, []);

  return (
      <div style={{ marginTop: 100 }}>

        <Typography variant="h3" align="center">
          Welcome
        </Typography>
        <Typography style={{ fontWeight: "bold" }} align="center">
          ... to the LBDserver demo!
        </Typography>
        <Typography style={{ margin: "50px auto 120px auto", maxWidth: 750 }}>
          This is a demo page where you can try out the (work in progress)
          functionality of the{" "}
          <a href="https://github.com/lbdserver">LBDserver</a> project. You can
          find some publicly accessible projects below. Simply activate one of
          the projects and start visualising your LBD queries. Come back to this
          page using the navigation bar "LBDserver" link.

        </Typography>
        {session.info.isLoggedIn ? (
          <div>
            <Typography
              style={{ marginTop: -100, fontWeight: "bold" }}
              align="center"
            >
              You are currently logged in as{" "}
              <a target="_blank" href={session.info.webId}>
                {session.info.webId}
              </a>
            </Typography>
          </div>
        ) : (
          <></>
        )}
        {/* {(session.info.isLoggedIn) ? ( */}
        <div style={{ marginTop: 30 }}>
        <ProjectSelection setCurrentProjects={setProjects} currentProjects={projects} session={session}/>
      </div>
        {/* // ) : (
        //   <Typography align="center">Log in to see your projects</Typography>
        // )} */}

      </div>
  );
};

export default Plugin;
