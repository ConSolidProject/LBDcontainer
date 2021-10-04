import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {joinProject} from "consolid"
import {Redirect} from 'react-router-dom'


const ProjectCard = ({project, session}) => {
  const [projectClicked, setProjectClicked] = useState(false);

  async function activateProject() {
    await joinProject(project, session);
    setProjectClicked(true);
  }

  return (
    <div>
          {projectClicked ? (
      <Redirect to="/" />
    ) : (
          <Card style={{top: 30}} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h5">
                {project}
              </Typography>
              <Button
            // className={classes.button}
            style={{top: 10, position: "relative"}}
            variant="contained"
            size="small"
            color="primary"
            onClick={activateProject}
          >
            Join Project
          </Button>
            </CardContent>

          </Card>)}
    </div>
  )

};

export default ProjectCard;
