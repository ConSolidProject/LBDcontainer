import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import { makeThisAProjectPod } from "consolid";
import InviteSelection from "./InviteSelection";
import { Redirect } from "react-router";

function ProjectSetup({ session }) {
  const [projectName, setProjectName] = useState("myFirstProject");
  const [creationType, setCreationType] = useState("local");
  const [projectDescription, setProjectDescription] = useState(
    "This is the description of my first project"
  );
  // const [projectLabel, setProjectLabel] = useState("LBDserver project");
  const [publicness, setPublicness] = useState(true);
  const [loading, setLoading] = useState(false);
  const [projectCreated, setProjectCreated] = useState(false);
  const [st, setSt] = useState("http://localhost:5000/architect/profile/card#me; http://localhost:5000/facilitymanager/profile/card#me");
  async function submitProject(e) {
    e.preventDefault();
    try {
      const data = {
        title: projectName,
        description: projectDescription,
        stakeholders: st.split(";").map(el => {
          return el.replace(/\s+/g, '')
        }),
      };

      makeThisAProjectPod(session, data);
    } catch (error) {
      console.log(`error`, error);
    }
  }

  return (
    <Grid container style={{ marginTop: 200 }}>
          <div style={{ marginTop: 200 }}>


    </div>
      <Grid item sm />
      <Grid item sm>
      {session.info.isLoggedIn ? (
<div>
<Typography variant="h3" component={"span"}>
          Create Project
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="CreationType"
            name="creationType"
            value={creationType}
            onChange={(e) => setCreationType(e.target.value)}
          >
            <FormControlLabel
              value="global"
              control={<Radio color="primary" />}
              label="Create Project"
            />
            <FormControlLabel
              value="local"
              control={<Radio color="primary" />}
              label="Join project"
            />
          </RadioGroup>
        </FormControl>
        {creationType === "global" ? (
          <form onSubmit={(e) => submitProject(e)}>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              fullWidth
              style={{ marginTop: 40 }}
            />
            <TextField
              id="description"
              name="description"
              label="Description"
              multiline
              fullWidth
              rowsMax={10}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              style={{ marginTop: 40 }}
            />{" "}
            <TextField
              id="standard-multiline-flexible"
              label="Stakeholders (separate by ';')"
              multiline
              fullWidth
              rowsMax={10}
              value={st.toString()}
              onChange={(e) => setSt(e.target.value)}
              style={{ marginTop: 40 }}
            />{" "}
            <FormControlLabel
              key={"privpub"}
              style={{ marginTop: 30 }}
              control={
                <Switch
                  id={"privpub"}
                  onChange={(e) => setPublicness(true)}
                  name="checkedB"
                  color="primary"
                  checked={true}
                />
              }
              label={
                "Make this project public (READ) (fixed until private projects can be fetched)"
              }
            />
            <br />
            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              color="primary"
              style={{ marginTop: 50 }}
            >
              Create Project
              {loading && <CircularProgress size={20} />}{" "}
            </Button>
            <br />
          </form>
        ) : (
          <form onSubmit={(e) => submitProject(e)}>
            <InviteSelection session={session} />
            <br />
          </form>
        )}
</div>
      ) : (
        <Redirect to="/auth" />
      )}

      </Grid>
      <Grid item sm />
    </Grid>
  );
}

export default ProjectSetup;
