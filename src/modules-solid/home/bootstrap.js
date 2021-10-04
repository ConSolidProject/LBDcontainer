import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import {createBrowserHistory} from 'history'
import Icon from '@material-ui/icons/AccountTree';
import { QueryClientProvider, QueryClient } from "react-query";
import {Session} from "@inrupt/solid-client-authn-browser"

const mount = (el, props) => {
    // const history = createMemoryHistory()
    // if (props.onNavigate) {
    //     history.listen(props.onNavigate)
    // }
  ReactDOM.render(
    <QueryClientProvider client={new QueryClient()}>
      <App {...props} />
    </QueryClientProvider>,
    el
  );


//   return {
//       onParentNavigate({pathname: nextPathname}) {
//         const {pathname} = history.location
//         if (pathname !== nextPathname) {
//           history.push(nextPathname)
//         }
//       }
//   }
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector("#_homemodule-dev-root");
    if (devRoot) {
        mount(devRoot, {defaultHistory: createBrowserHistory(), session: new Session()})
    }
}

export default mount
