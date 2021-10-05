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
            "h": 900,
            "w": 600
          },
          "children": {
            "resourcemanager": {
              "url": "https://consolidproject.github.io/pluginResourceManager/remoteEntry.js",
              "scope": "resourcemanager",
              "module": "./index",
              "icon": "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
            },
            "projectquery": {
              "url": "https://consolidproject.github.io/pluginQuery/remoteEntry.js",
              "scope": "projectquery",
              "module": "./index",
              "icon": "M7 9H2V7h5v2zm0 3H2v2h5v-2zm13.59 7-3.83-3.83c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L22 17.59 20.59 19zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zM2 19h10v-2H2v2z"
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
        },
            "imageannotator": {
              "url": "https://consolidproject.github.io/pluginImageViewer/remoteEntry.js",
              "scope": "imageannotator",
              "module": "./index",
              "dimensions": {
                "x": 600,
                "y": 450,
                "h": 450,
                "w": 660
              }
            }
      }
      
})

export default config