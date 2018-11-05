import { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader"
import { Helmet } from "react-helmet"

import { Home, Chat } from "./pages"

const App = () => (
  <Fragment>
    <Helmet
      script={[
        {
          type: "text/javascript",
          innerHTML:
            'window.$crisp=[];window.CRISP_WEBSITE_ID="eb431f6c-af5b-4a5b-8822-b71066070599";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();',
        },
      ]}
    />

    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </Router>
  </Fragment>
)

export default hot(module)(App)
