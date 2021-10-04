import React, { useEffect, useState, Suspense } from "react";
import GenericRemoteComponent from './GenericRemoteComponent'
import { Drawer, CssBaseline, Divider, SvgIcon } from "@material-ui/core";

const miniDrawerWidth = 60;

const Plugin = ({sharedProps, children, module: mod}) => {
  const [activePlugin, setActivePlugin] = useState(Object.keys(mod.children)[0]);
  console.log('rendering')
  function activatePlugin(plugin) {
    setActivePlugin(plugin);
  }

  return (
    <div>
        <CssBaseline />

        <div
          id="pluginChild"
          style={{
            width: mod.dimensions.w - miniDrawerWidth - 2,
            marginLeft: miniDrawerWidth,
          }}
        >{Object.keys(mod.children).map((child) => {
          console.log(`child`, child)
          console.log(`children[child.scope]`, children[child])
          return <GenericRemoteComponent mount={children[child]} sharedProps={sharedProps} module={mod} active={(activePlugin === child) ? true : false}/>

        })}
        </div>
        <Drawer anchor="left" variant="permanent">
          <div></div>
          <Divider />
          {Object.keys(mod.children).map((text) => {
            return (
              <div style={{ margin: 10, marginLeft: 4 }} key={text+"_icon"}>
                <SvgIcon
                  color="primary"
                  style={{ marginLeft: 15, height: 30, width: 30 }}
                  onClick={() => activatePlugin(text)}
                >
                  <path d={mod.children[text].icon} />
                </SvgIcon>
              </div>
            );
          })}
          <Divider />
        </Drawer>
    </div>
  );
};

export default Plugin;
