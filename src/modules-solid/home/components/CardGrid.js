import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const CardGrid = ({projects, setCurrentProjects, currentProjects}) => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={8} >
          {projects.map((project, i) => {
            return (
              <Grid key={project} item>
                <ProjectCard setCurrentProjects={setCurrentProjects} currentProjects={currentProjects} project={project}/>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardGrid;
