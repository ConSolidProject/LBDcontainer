import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton"
import { useRecoilState } from "recoil";
import { openOptions as o } from "../atoms";
import HelpIcon from '@material-ui/icons/Help';


export default function Header() {
  const [openOptions, setOpenOptions] = useRecoilState(o)

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            LBDserver
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            variant="outlined"
            color="primary"
            key={"setup"}
            style={{ color: "white", fontWeight: "normal" }}
            onClick={() => setOpenOptions(!openOptions)}
          >
            <HelpIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
