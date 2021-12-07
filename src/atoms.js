import React from 'react'
import {atom, atomFamily, selectorFamily} from 'recoil'
import {Session} from "@inrupt/solid-client-authn-browser"
const {v4} = require('uuid')
const N3 = require("n3");

const store = atom({
    key: "store", 
    default: new N3.Store()
})

// const configuration = atom({
//     key: "configuration",
//     default: `${window.location.origin}/public/configuration.ttl`
// })

const openOptions = atom({
    key: "openOptions",
    default: true
})

const session = atom({
    key: "session",
    default: new Session()
})

const projects = atom({
    key: "projects",
    default: ["http://localhost:5000/arch/lbd/testproject/"]

    // default: ["http://localhost:5000/jeroen/lbd/c9f58795-1d37-4f8f-b7e2-60f3cff5f716/"]
    // default: ["http://localhost:5000/jeroen/lbd/642f0417-ce23-4d9d-8806-c078aed93ae1/"]
    // default: {global: "http://localhost:5000/1project/profile/card#me", local: "http://localhost:5000/architect/lbd/b1e65aa0-3a43-47b3-9932-7306b15ffebe/"}
    // // default: {global: "http://localhost:5000/gravensteen/profile/card#me", local: "http://localhost:5000/facilitymanager/lbd/5f72a700-40eb-4a41-b88a-2983b3cd6cbc/"}
})

const datasets = atom({
    key: "datasets",
    default: [
    //     {
    //     resource: "http://localhost:5000/architect/lbd/b1e65aa0-3a43-47b3-9932-7306b15ffebe/duplex.ttl",
    //     metadata: "http://localhost:5000/architect/lbd/b1e65aa0-3a43-47b3-9932-7306b15ffebe/duplex.ttl.props.ttl",
    // }, {
    //   resource: "http://localhost:5000/architect/lbd/b1e65aa0-3a43-47b3-9932-7306b15ffebe/mymodel.gltf",
    //   metadata: "http://localhost:5000/architect/lbd/b1e65aa0-3a43-47b3-9932-7306b15ffebe/mymodel.gltf.props.ttl",
    // }
]
})

const selectedElements = atom({
    key: "selectedElements",
    default: []
})

const selectionId = atom({
    key: "selectionId",
    default: ""
})

const trigger = atom({
    key: "trigger",
    default: 1
})

// const pluginsAtom = atomFamily({
//     key: 'plugin',
//     default: {}
// })

// const pluginIds = atomFamily({
//     key: "pluginIds",
//     default: []
// })

// const pluginState = selectorFamily({
//     key: 'pluginState',
//     get: (id) => ({get}) => {
//         const atom = get(pluginsAtom(id));
//         return atom
//     },
//     set: (id) => ({set}, pluginstate) => {
//         set(pluginsAtom(id), pluginstate);
//         set(pluginIds(id), prev => [...prev, pluginState.id])
//     }
// })





export {store, session, projects, datasets, selectedElements, selectionId, trigger, openOptions}