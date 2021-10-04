import React from 'react'
import {atom, atomFamily, selectorFamily} from 'recoil'

const config = atom({
    key: "config", 
    default: {
        "tabs": {
          "url": "https://consolidproject.github.io/pluginAggregatorTabs/remoteEntry.js",
          "scope": "tabs",
          "label": "tabs",
          "module": "./index",
          "dimensions": {
            "x": 0,
            "y": 0,
            "h": 850,
            "w": 600
          },
          "children": {
            "resourcemanager": {
              "url": "https://consolidproject.github.io/pluginResourceManager/remoteEntry.js",
              "scope": "resourcemanager",
              "module": "./index",
              "icon": "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
            },
            "projectquery": {
              "url": "https://consolidproject.github.io/pluginQuery/remoteEntry.js",
              "scope": "projectquery",
              "module": "./index",
              "icon": "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
            }
          }
        },
        "viewer": {
          "url": "https://consolidproject.github.io/pluginViewer/remoteEntry.js",
          "scope": "viewer",
          "module": "./index",
          "dimensions": {
            "x": 600,
            "y": 0,
            "h": 450,
            "w": 660
          }
        }
      }
      
})

export default config