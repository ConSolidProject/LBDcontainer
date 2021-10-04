import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
const CardGrid = ({projects, session}) => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      {(projects.length === 0)  ?(
        <p>No project invites were found</p>
) : (
  <Grid container justify="center" spacing={8} >
  {projects.map((project, i) => {
    return (
      <Grid key={project} item>
        <ProjectCard project={project} session={session}/>
      </Grid>
    );
  })}
</Grid>
)}

      </Grid>
    </Grid>
  );
};

export default CardGrid;
