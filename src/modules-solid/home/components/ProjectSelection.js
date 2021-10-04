import React, { useEffect, useState } from "react";
import { getMyProjects } from "consolid";
import { useQuery } from "react-query";
import {TextField, Button} from '@material-ui/core'
import CardGrid from "./CardGrid";
import { getProjectsFromAggregator } from "consolid";

const ProjectSelection = ({ session, setCurrentProjects, currentProjects }) => {
  const [aggregator, setAggregator] = useState('http://localhost:5000/jeroen/lbd/')
  const [data, setData] = useState(null)
  // const {
  //   isLoading,
  //   data,
  //   refetch: refetchPersonal,
  // } = useQuery("myProjects", () => getMyProjects(session), {
  //   enabled: session.info.isLoggedIn ? true : false,
  // });

  async function fetchAggregator() {
    const projects = await getProjectsFromAggregator(aggregator, session)
    setData(projects)
  }

  return (
    <div style={{ marginTop: 200, textAlign: "center"}}>
      <TextField id="aggregatorField" label="aggregator" style={{width: 800}} variant="outlined" value={aggregator} onChange={(e) => setAggregator(e.target.value)}/>
      <Button variant="contained" color="primary" onClick={fetchAggregator}>Fetch</Button>
        {data ? (
        <CardGrid projects={data} setCurrentProjects={setCurrentProjects} currentProjects={currentProjects}/>) : (<></>
        )}
    </div>
  );
};

export default ProjectSelection;
