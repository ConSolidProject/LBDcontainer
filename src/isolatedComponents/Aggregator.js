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
    "http://localhost:5000/jeroen/lbd/"
  );
  const [data, setData] = useState([]);
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
      const t = [...data, ...activeProjects, ...myProjects]
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
        <Typography style={{ textAlign: "justify" }} variant="body1">
          Projects can be found via aggregators, which basically contain
          pointers to existing projects. Aggregators are basically LDP (Linked
          Data Platform) containers. If you have a dedicated LBDserver project
          folder configured in your Solid Pod: that is an aggregator. Other
          aggregators could group projects based on location, typology etc.
        </Typography>
        <br />
        <Typography style={{ textAlign: "justify" }} variant="body1">
          Activate a project from a public aggregator:
        </Typography>
        <br />
        <TextField
          id="aggregatorField"
          label="aggregator"
          fullWidth
          variant="outlined"
          value={aggregator}
          onChange={(e) => setAggregator(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={async () => {
            await fetchAggregator(aggregator, setData);
          }}
          style={{ marginTop: 20 }}
        >
          GET PROJECTS
        </Button>
        {possibleProjects().map((item) => {
          return <ProjectCard key={item} project={item} />;
        })}
      </Container>
    </React.Fragment>
  );
};
