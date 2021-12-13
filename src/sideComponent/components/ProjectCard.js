import React, { useState, useEffect, Suspense } from "react";
import {
  loadProjectMetadata, queryComunica
} from "consolid";
import {
  Switch,
  Typography,
  CardContent,
  Card,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";


export default ({ project, projects, setProjects, setDatasets }) => {
  const { isLoading, isError, data: name, error } = useQuery(project, async () => {const res = await queryComunica(`select ?i where {?p <https://lbdserver.org/vocabulary#hasProjectId> ?i}`, [project + 'local/'], {results: true, single: true, variable: "i"}, getDefaultSession()); console.log(res); return res})

    async function activateProject() {
      if (projects.includes(project)) {
        setProjects((proj) =>
          proj.filter((p) => {
            return p != project;
          })
        );
        setDatasets([])
      } else {
        setProjects([project]);
      }
    }

    return (
      <div>
        <Card style={{ marginTop: 5, marginBottom: 5 }} variant="outlined">
          <CardContent>
            <Typography component="p">
                  {name}
              </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={projects.includes(project)}
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
  