import React, { useEffect, Suspense, useState } from "react";
import { useRecoilValue, useRecoilState, useRecoilSnapshot } from "recoil";
import {
  session as sess,
  projects as p,
  datasets as ds,
  selectedElements as se,
  selectionId as sId,
  openOptions as o,
  trigger as t,
} from "./atoms";
import c from "./config";
import { Options } from "./sideComponent";
import DashboardPage from "./components/DashboardPage";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

const generateClassname = createGenerateClassName({
  productionPrefix: "main",
  seed: "main",
});

export default () => {
  const [projects, setProjects] = useRecoilState(p);
  const [trigger, setTrigger] = useRecoilState(t);
  const [openOptions, setOpenOptions] = useRecoilState(o);
  const [config, setConfig] = useRecoilState(c);
  const [datasets, setDatasets] = useRecoilState(ds)
  return (
    // if <Router> instead of <BrowserRouter> then provide the history object history={history}
    <StylesProvider generateClassName={generateClassname}>
      <QueryClientProvider client={queryClient}>
        <Header name="LBDserver" />
        {Object.keys(projects).length > 0 ? (
          <DashboardPage />
        ) : (
          <div style={{ marginTop: 100, justifyContent: "center" }}>
            <Typography variant="h5">
              Please select a project via the sidebar
            </Typography>
          </div>
        )}
        <Options
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          trigger={trigger}
          setTrigger={setTrigger}
          setDatasets={setDatasets}
          projects={projects}
          setProjects={setProjects}
          config={config}
          setConfig={setConfig}
          drawerWidth={"40%"}
        />
      </QueryClientProvider>
    </StylesProvider>
  );
};
