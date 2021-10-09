import React, { useState, useEffect } from "react";
import {
  getProjectsFromAggregator,
  loadProjectMetadata,
  createProject,
  getLBDlocation,
} from "consolid";
import {
  TextField,
  Button,
  Switch,
  Typography,
  CardContent,
  Card,
  FormGroup,
  FormControlLabel,
  Container,
} from "@material-ui/core";
import {
  store as s,
  session as sess,
  projects as p,
  trigger as t,
} from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { v4 } from "uuid";
import ProjectCard from './ProjectCard'

export default () => {
  const [aggregator, setAggregator] = useState(
    "https://pod.lbdserver.org/jeroen/lbd/"
  );
  const [myProjects, setMyProjects] = useState([]);
  const activeProjects = useRecoilValue(p);
  const trigger = useRecoilValue(t);

  // trigger rerender on trigger (i.e. if session changes)
  useEffect(() => {}, [trigger]);

  async function fetchAggregator(agg, setter) {
    const projects = await getProjectsFromAggregator(agg, getDefaultSession());
    console.log(`projects`, projects);
    setter(projects);
  }

  async function onProjectCreate() {
    await createProject(
      v4(),
      [getDefaultSession().info.webId],
      getDefaultSession()
    );
    await getMyProjects()
  }

  async function getMyProjects() {
    const myLbdLocation = await getLBDlocation(
        getDefaultSession().info.webId,
        getDefaultSession()
      );
    await fetchAggregator(myLbdLocation, setMyProjects);
  }

  function possibleProjects() {
      const p = []
      const t = [...activeProjects, ...myProjects]
      t.forEach(d => {
          if (!p.includes(d)) {
              p.push(d)
          }
      } )
      return p
  }
  

  return (
    <React.Fragment>
      <Container component="main">
        {getDefaultSession().info.isLoggedIn ? (
          <div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={async () => getMyProjects()}
              style={{marginTop: 5, marginBottom: 5}}
              >
              Get my projects
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => onProjectCreate()}
            >
              Create new project
            </Button>
            {possibleProjects().map((item) => {
          return <ProjectCard key={item} project={item} />;
        })}
          </div>
        ) : (
          <div>
        <Typography style={{ textAlign: "justify" }} variant="body1">
          Register/Log in to create your own project.
        </Typography>
          </div>
        )}
      </Container>
    </React.Fragment>
  );
};
