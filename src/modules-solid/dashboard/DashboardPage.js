import React, { useEffect, useState } from "react";
import DrawLayout from './components/DrawLayout'

const N3 = require("n3");

const { DataFactory } = N3;
const { namedNode, literal, defaultGraph, quad } = DataFactory;

const Plugin = ({sharedProps}) => {
  // async function prepareConfig() {
  //   const pagesQuery =
  //     `prefix lbds: <http://lbdserver.com/config/voc#> prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT * WHERE 
  //     {?this lbds:remoteEntry <${props.system.url}>;
  //         lbds:aggregates ?child. 
  //      ?child lbds:scope ?scope ;
  //         lbds:module ?module ;
  //         lbds:manifest ?manifest ; 
  //         lbds:remoteEntry ?url ; 
  //         rdfs:label ?label ;
  //         lbds:hasXPosition ?x;
  //         lbds:hasYPosition ?y ;
  //         lbds:hasWidth ?w ;
  //         lbds:hasHeight ?h . 
  //       } `;

  //   const res = await myEngine.query(pagesQuery, { sources: [configuration] });
  //   console.log(`res`, res)

  //   const moduleObject = {}
  //   res.results.bindings.forEach((item) => {
  //     moduleObject[item.url.value]  = {
  //       url: item.url.value,
  //       scope: item.scope.value,
  //       manifest: item.manifest.value,
  //       module: item.module.value,
  //       label: item.label.value,
  //       x: parseInt(item.x.value),
  //       y: parseInt(item.y.value),
  //       h: parseInt(item.h.value),
  //       w: parseInt(item.w.value)
  //     };
  //   })
  //   setModules(
  //     moduleObject
  //   );
  // }

  return (
    <div>
      <DrawLayout/>
    </div>
  );
};

export default Plugin;
