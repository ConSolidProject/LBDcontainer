import React, { useState, useEffect } from "react";
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
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ProjectCard from "./ProjectCard";


import {createProject, getProjects} from 'consolid'

export default ({ projects, setProjects, setDatasets, trigger, setTrigger }) => {
  const [aggregator, setAggregator] = useState(
    "https://pod.lbdserver.org/jeroen/lbd/"
  );
  const [myProjects, setMyProjects] = useState([]);
  const [stakeholders, setStakeholders] = useState("");
  const [guid, setGuid] = useState("")
  const [invites, setInvites] = useState([]);
  // trigger rerender on trigger (i.e. if session changes)
  useEffect(() => {
    getMyInvites()
  }, [trigger]);

  async function onProjectCreate() {
    const st = stakeholders.split(";").map((el) => {
      return el.replace(/\s+/g, "");
    });
    st.push(getDefaultSession().info.webId);
    let id
    if (guid.length > 0) {
      id = guid
    } else {
      id = v4()
    }
    await createProject(id, st, {}, getDefaultSession());
    const proj = await getProjects(getDefaultSession().info.webId, getDefaultSession());
    console.log(`proj`, proj)
    setMyProjects(proj)
  }

  // async function getProjects() {
  //   const myLbdLocation = await getLBDlocation(
  //     getDefaultSession().info.webId,
  //     getDefaultSession()
  //   );
  //   await fetchAggregator(myLbdLocation, setMyProjects);
  // }

  async function getMyInvites() {
    try {
    // const theInvites = await checkInvites(getDefaultSession())
    // setInvites(theInvites)      
    } catch (error) {
      console.log(`error`, error)
    }

  }

  return (
    <React.Fragment>
      <Container component="main">
        {getDefaultSession().info.isLoggedIn ? (
          <div>
            <div>
              <Typography style={{ textAlign: "justify" }} variant="body1">
                Your projects are saved in a subdirectory of your POD "/lbd/"
                (Linked Building Data). If you already host some projects, you
                can activate them here.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={async () => {
                  const projects = await getProjects(getDefaultSession().info.webId, getDefaultSession());
                  console.log(`projects`, projects)
                  setMyProjects(projects)
                }}
                style={{ marginTop: 5, marginBottom: 5 }}
              >
                Get my projects
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
            </div>
            <div>
              <br />
              <Typography style={{ textAlign: "justify" }} variant="body1">
                Otherwise, you may create a project. If you want to invite
                others to your project, you may add their webIds below.{" "}
              </Typography>
              <br />
              <TextField
                id="standard-multiline-flexible"
                label="Stakeholders (separate by ';')"
                multiline
                fullWidth
                maxRows={10}
                value={stakeholders.toString()}
                onChange={(e) => setStakeholders(e.target.value)}
                style={{ marginTop: 10, marginBottom: 10 }}
              />{" "}
              <TextField
                id="standard-multiline-flexible"
                label="Optional GUID of project to join"
                fullWidth
                value={guid}
                onChange={(e) => setGuid(e.target.value)}
                style={{ marginTop: 10, marginBottom: 10 }}
              />{" "}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => onProjectCreate()}
              >
                Create new project
              </Button>
              {/* <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Item>Stakaholder WebID:</Item>
                </Grid>
                <Grid item xs={7}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={2}>
              </Grid>
              <IconButton
                    style={{
                      position: "absolute",
                      right: (drawerOpened && drawerWidth) || 0,
                    }}
                    variant="contained"
                    color="primary"
                    onClick={() => setStakeholders(st => [...st, e.target.value])}
                  >
                    {drawerOpened ? <></> : <AddCircleOutlineIcon />}
                  </IconButton>{" "}
                </Grid> */}
            </div>
            <div>
              <br />
              <Typography style={{ textAlign: "justify" }} variant="body1">
                Or join a project for which you were invited for collaboration:
              </Typography>
              {invites ? <div>
                {invites.map(inv => {
                  return (
                    <InviteCard sender={inv.sender} reference={inv.ref} invite={inv.source} callback={getProjects}/>
                  )
                })}
              </div> 
                : <p>No pending invites</p>}
              <br />
            </div>
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


const InviteCard = ({ sender, reference, invite }) => {
  const [loading, setLoading] = useState(false)
  const [ready, setReady] = useState(false)
  async function acceptInvitation() {
    try {
      setLoading(true)
      await joinProject(reference, invite, getDefaultSession())
      setLoading(false)
      callback()
      setReady(true)
    } catch (error) {
      setLoading(false)
      console.log(`error`, error)
    }

  }
  if (ready) return <></>
  return (
    <div style={{backgroundColor: "bisque"}}>
      <Card style={{ marginTop: 5, marginBottom: 5 }} variant="outlined">
        <CardContent>
          <Typography variant="h6" component="h6" style={{fontSize: "14px"}}>Sender: {sender}</Typography>
          <Typography component="p" style={{fontSize: "10px"}}>Reference: {reference}</Typography>
          <Button disabled={loading} onClick={acceptInvitation} variant="contained" color="primary">Join</Button>
        </CardContent>
      </Card>
    </div>
  );
};