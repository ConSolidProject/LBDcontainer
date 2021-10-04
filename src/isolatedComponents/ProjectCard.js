import React, { useState, useEffect } from "react";
import {
  loadProjectMetadata
} from "consolid";
import {

  Switch,
  Typography,
  CardContent,
  Card,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import {
  store as s,
  projects as p
} from "../atoms";
import { useRecoilState } from "recoil";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";

export default ({ project }) => {
    const [currentProjects, setCurrentProjects] = useRecoilState(p);
    const [store, setStore] = useRecoilState(s);
  
    async function activateProject() {
      if (currentProjects.includes(project)) {
        setCurrentProjects((proj) =>
          proj.filter((p) => {
            return p != proj;
          })
        );
      } else {
        setCurrentProjects((proj) => [...proj, project]);
        await loadProjectMetadata(project, store, getDefaultSession());
        console.log("done");
      }
    }
  
    return (
      <div>
        <Card style={{ marginTop: 5, marginBottom: 5 }} variant="outlined">
          <CardContent>
            <Typography component="p">{project}</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={currentProjects.includes(project)}
                    onChange={(e) => activateProject()}
                  />
                }
                label="Active"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </div>
    );
  };
  