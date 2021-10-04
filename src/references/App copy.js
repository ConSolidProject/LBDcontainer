import React, {useEffect} from "react";
import System from '../utils/System'
import { useRecoilValue, useRecoilState } from "recoil";

import {store as s, queryEngine as q, trigger as t} from '../atoms'

const N3 = require("n3");
const { DataFactory } = N3;
const { namedNode, literal, defaultGraph, quad } = DataFactory;

export default () => {
  const store = useRecoilValue(s)
  const myEngine = useRecoilValue(q)
  const [trigger, setTrigger] = useRecoilState(t)

  useEffect(() => { 
    query()
  }, [trigger])
  

  async function query() {
    const result = await myEngine.query(
      `SELECT * 
      FROM <http://lbdserver.org/state/selection>
      WHERE { ?s ?p ?o}`,
      {
        sources: [store],
      }
    );
    result.bindingsStream.on("data", (binding) => {
      const r = {}
      result.variables.forEach((v) => {
        console.log(`binding.get(v).value`, binding.get(v).value)
        r[v] = binding.get(v).value
      });
      // const c = res
      // c.push(r)
      // setRes([...c])
      })
  }
  
  return (
    <div>
      {/* <p>I am the container</p>
      <button onClick={query}>click</button>
      <div id="container" style={{width: "100%", height: "100%"}}>
      <System
        system={{
          url: "http://localhost:4003/remoteEntry.js",
          scope: "viewer",
          module: "./index",
        }}
        bundleState={{store, engine: myEngine, setTrigger}}
        parent={"container"}
      />
      </div> */}
    </div>
  );
};
