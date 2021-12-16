import React, { useState, useEffect } from "react";
import {
  getProjectsFromAggregator,
  loadProjectMetadata,
  createProject,
  getLBDlocation,
  getLdpMembers
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
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { v4 } from "uuid";
import ProjectCard from './ProjectCard'

export default ({trigger, projects, setProjects, setDatasets, setTrigger}) => {
  const [aggregator, setAggregator] = useState(
    "https://pod.lbdserver.org/arch/lbd/"
  );
  const [data, setData] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  const [error, setError] = useState()

  // trigger rerender on trigger (i.e. if session changes)
  useEffect(() => {}, [trigger]);

  async function fetchAggregator(agg, setter) {
    const projects = await getLdpMembers([agg], getDefaultSession())
    console.log(`projects`, projects);
    setter(projects);
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
            try {
              const projects = await getLdpMembers([aggregator], getDefaultSession())
              console.log(`projects`, projects)
              if (projects.length == 0) {
                throw new Error("Something went wrong. The aggregator may be offline. Our apologies for this inconvenience.")
              }
              setMyProjects(projects)
            } catch (err) {
              console.log(`error`, err)
              setError(err)
            }
          }}
          style={{ marginTop: 20 }}
        >
          GET PROJECTS
        </Button>
            {myProjects.map((item) => {
              return (
                <ProjectCard
                  setDatasets={setDatasets}
                  key={item}
                  project={item}
                  projects={projects}
                  setProjects={setProjects}
                  setTrigger={setTrigger}
                />
              );
            })}
            {error && error.message}
      </Container>
    </React.Fragment>
  );
};
