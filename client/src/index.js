import "bulma/css/bulma.css";
import { render } from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./App.js";

render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    //clientId="Y3xd6gto4h0LECF27CZ9q1cMXoy1vmaq"
    //domain="dev-7o4t1t5n.us.auth0.com"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.querySelector("#content")
);
