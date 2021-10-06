import React, { useEffect, Suspense, useState } from "react";
import System, { getFromRemote } from "./utils/System";
import { useRecoilValue, useRecoilState, useRecoilSnapshot } from "recoil";
import { loadConfig } from "./utils/configFunctions";
import {
  store as s,
  session as sess,
  projects as p,
  activeResources as sel,
  selectedElements as se,
  selectionId as sId,
  openOptions as o,
  trigger as t,
} from "./atoms";
import c from './config'
// import {loadProjectMetadata} from "consolid"
import {Options} from './sideComponent'
import DashboardPage from './modules-solid/dashboard/DashboardPage'
import Header from "./components/Header";
import { createBrowserHistory } from "history";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import wrapComponent from "./utils/ErrorBoundary";
import { Typography } from "@material-ui/core";
import {getDefaultSession} from '@inrupt/solid-client-authn-browser'
const v4 = require("uuid");


const generateClassname = createGenerateClassName({
  productionPrefix: "main",
  seed: "main",
});


// import Signin from './components/Signin'
// import { getAuthentication } from "./auth";

const N3 = require("n3");
const { DataFactory } = N3;
const { namedNode, literal, defaultGraph, quad } = DataFactory;
const history = createBrowserHistory();

export default () => {
  const store = useRecoilValue(s);
  const [activeResources, setActiveResources] = useRecoilState(sel)
  const [selectedElements, setSelectedElements] = useRecoilState(se)
  const [projects, setProjects] = useRecoilState(p);
  const [selectionId, setSelectionId] = useRecoilState(sId)
  const [trigger, setTrigger] = useRecoilState(t)
  const [openOptions, setOpenOptions] = useRecoilState(o)
  const [config, setConfig] = useRecoilState(c)

  useEffect(() => {
    console.log('config changed')
  }, [config])

  useEffect(() => {
    if (projects.length > 0) {
      loadProjectMetadata(projects[0], store, getDefaultSession()).then(() => console.log('loaded'))
    }
  }, [])

  // useEffect(() => {
  //   // getProject("http://localhost:5000/gravensteenpod/profile/card")
  //   prepareConfig();
  // }, []);

  // useEffect(() => {
  //   console.log('session changed')
  //   reconfigureAuthentication()
  // }, [session]);

  // async function reconfigureAuthentication() {
  //   if (!session.info.isLoggedIn) {
  //     getAuthentication(session, setSession)
  //   }
  // }

  // async function prepareConfig() {
  //   const pagesQuery =
  //     "prefix lbds: <http://lbdserver.com/config/voc#> prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT * WHERE {?config lbds:hasPage ?page. ?page lbds:scope ?scope; lbds:module ?module; lbds:manifest ?manifest; lbds:route ?route; lbds:remoteEntry ?url; rdfs:label ?label} ";

  //   const res = await myEngine.query(pagesQuery, { sources: [configuration] });

  //   setPages(
  //     res.results.bindings.map((item) => {
  //       return {
  //         url: item.url.value,
  //         route: item.route.value,
  //         scope: item.scope.value,
  //         manifest: item.manifest.value,
  //         module: item.module.value,
  //         label: item.label.value,
  //       };
  //     })
  //   ); 
  // }

    return ( 
      // if <Router> instead of <BrowserRouter> then provide the history object history={history}
      <StylesProvider generateClassName={generateClassname}>
        <Header name="LBDserver"/>
        {(projects.length > 0) ? (
        <DashboardPage/>

        ) : (
          <div style={{marginTop: 100, justifyContent: "center"}}>
          <Typography variant="h5" >Please select a project via the sidebar</Typography>
          </div>
        )}
        <Options openOptions={openOptions} setOpenOptions={setOpenOptions} trigger={trigger} setTrigger={setTrigger} projects={projects} setProjects={setProjects} store={store} config={config} setConfig={setConfig} drawerWidth={"40%"}/>
      </StylesProvider>
    );
};
