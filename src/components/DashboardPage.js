import React, { memo, useRef, useState, Suspense, useEffect } from "react";
import Draggable from "react-draggable";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import mem from "mem";
import System from "../utils/System";
import { IconButton, Typography } from "@material-ui/core";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import c from "../config";
import {
  store as s,
  session as sess,
  projects as p,
  datasets as sel,
  selectedElements as se,
  selectionId as sId,
  openOptions as o,
  trigger as t,
} from "../atoms";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";

// const myModules = require("../../../../config/configuration.js");

// const boxIds = useRecoilValue(boxIdState);

// const boxIdState = atom({
//   key: "boxIdState",
//   default: Object.keys(defaultConfig),
// });

export default function Modules(props) {
  const modules = useRecoilValue(c);
  const [boxIds, setBoxIds] = useState(Object.keys(modules))
  useEffect(() => {
    console.log(`modules`, modules)
    setBoxIds(Object.keys(modules))
  }, [modules])

  return (
    <div style={{ marginTop: 64, marginLeft: -10 }}>
      {boxIds.map((id) => {
        if (modules[id] && modules[id].dimensions) {
          return <DrawModule key={id} id={id} mod={modules[id]} />;
        }
      })}
    </div>
  );
}

const getBoxState = mem((mod) =>
  atom({
    key: `boxState_${mod.url}`,
    default: {
      x: mod.dimensions.x,
      y: mod.dimensions.y,
      w: mod.dimensions.w,
      h: mod.dimensions.h,
      fixed: true,
    },
  })
);

const DrawModule = ({ id, mod }) => {
  const [box, setBox] = useRecoilState(getBoxState(mod));
  const [minimized, setMinimized] = useState(false);
  const ref = useRef();
  function resetPosition() {
    setBox({
      ...box,
      x: mod.dimensions.x,
      y: mod.dimensions.y,
      fixed: true,
      minimized: false,
    });
  }

  function toggleMinimize() {
    if (!box.minimized) {
      setBox({ ...box, minimized: true, w: 300, h: 50, y: Math.max(box.y, 0) });
    } else {
      setBox({ ...box, minimized: false, w: mod.w, h: mod.h });
    }
  }

  return (
    <Draggable
      nodeRef={ref}
      position={{ x: box.x, y: box.y }}
      onDrag={(event, data) => {
        setBox({ ...box, x: data.x, y: data.y });
      }}
      disabled={box.fixed}
    >
      <div
        id={`module${id}`}
        ref={ref}
        className="box"
        style={{
          width: box.w,
          height: box.h,
          display: "flex",
          position: "absolute",
          background: "white",
          border: "1px LightGray solid",
        }}
      >
        {!mod.dimensions.fixed ? (
          <div>
            <IconButton
              color="primary"
              style={{ position: "absolute", right: 0, bottom: 0, zIndex: 1 }}
              onClick={() => resetPosition()}
            >
              <CompareArrowsIcon />
            </IconButton>
            <IconButton
              color="primary"
              style={{ position: "absolute", right: 80, bottom: 0, zIndex: 1 }}
              onClick={() => toggleMinimize()}
            >
              {box.minimized ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>

            <IconButton
              color="primary"
              style={{
                position: "absolute",
                right: 40,
                bottom: 0,
                zIndex: 1,
              }}
              onClick={() => setBox({ ...box, fixed: !box.fixed })}
            >
              {!box.fixed ? <LockOpenIcon /> : <LockIcon />}
            </IconButton>
          </div>
        ) : (
          <></>
        )}
        {!box.minimized ? (
          <div>
            <Suspense fallback={<p>loading ...</p>}>
              <HotRemoteModule mod={mod} />
              {/* <RemoteModule module={mod} /> */}
            </Suspense>
          </div>
        ) : (
          <Typography style={{ marginLeft: 10, marginTop: 15 }}>
            {id.toUpperCase()}
          </Typography>
        )}
      </div>
    </Draggable>
  );
};

const HotRemoteModule = ({ mod }) => {
  const store = useRecoilValue(s);
  const config = useRecoilValue(c)
  const [datasets, setDatasets] = useRecoilState(sel);
  const [selectedElements, setSelectedElements] = useRecoilState(se);
  const [projects, setProjects] = useRecoilState(p);
  const [selectionId, setSelectionId] = useRecoilState(sId);
  const [trigger, setTrigger] = useRecoilState(t);
  const [key, setKey] = useState(1)
  useEffect(() => {
    setKey(k => k+1)
  }, [config])

  const sharedProps = {
    trigger,
    setTrigger,
    projects,
    setProjects,
    store,
    datasets,
    setDatasets,
    selectedElements,
    setSelectedElements,
    selectionId,
    setSelectionId,
    session: getDefaultSession()
  };

  return (
    <System
      key={key}
      system={{
        module: mod.module,
        url: mod.url,
        scope: mod.scope,
      }}
      sharedProps={sharedProps}
      module={mod}
      config={config}
    />
  );
};
