import React, { useState } from "react";
import {Switch, Typography, CardContent, Card, FormGroup, FormControlLabel, Button} from "@material-ui/core";
import { Redirect } from "react-router";
import {loadProjectMetadata} from 'consolid'
import {
  store as s,
  queryEngine as q,
  session as sess,
  projects as p,
  activeResources as sel,
  selectedElements as se,
  selectionId as sId
} from "../../../atoms";
import {  useRecoilState } from "recoil";
import { QueryEngineComunicaSolid } from "graphql-ld-comunica-solid";


const ProjectCard = ({ project }) => {
  const [currentProjects, setCurrentProjects] = useRecoilState(p);
  const [session, setSession] = useRecoilState(sess);
  const [store, setStore] = useRecoilState(s)

  const [projectClicked, setProjectClicked] = useState(false);

  async function activateProject() {
    if (currentProjects.includes(project)) {
      setCurrentProjects((proj) => proj.filter((p) => {
        return p != proj
      }));
    } else {
      setCurrentProjects((proj) => [...proj, project]);
      await loadProjectMetadata(project, store, session)
      console.log('done')
    }
  }

  // const queryStore = async () => {
  //   const myEngine = new QueryEngineComunicaSolid()
  //   const query = `SELECT ?s ?p ?o FROM <${project}> WHERE {?s ?p ?o}`
  //   const result = await myEngine.query(query, {sources: [store]})
  //   console.log(`result.results.bindings`, result.results.bindings)

  // }
 
  return (
    <div>
      <Card style={{ top: 30 }} variant="outlined">
        <CardContent>
          <Typography component="p">
            {project}
          </Typography>
          <FormGroup>
  <FormControlLabel control={<Switch color="primary" checked={currentProjects.includes(project)} onChange={(e) => activateProject()}/>} label="Active" />
</FormGroup>
          {/* <Button
            // className={classes.button}
            style={{ top: 10, position: "relative" }}
            variant="contained"
            size="small"
            color="primary"
            onClick={queryStore}
          >
            query
          </Button> */}
        </CardContent>
        {/* {projectClicked ? <Redirect to={"/dashboard"} /> : <></>} */}
      </Card>
    </div>
  );
};

export default ProjectCard;
