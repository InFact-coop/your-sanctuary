import { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader"

import { Home, Chat, SignUp1, SignUp2 } from "./pages"

import RequireAuth from "./higher-order-comps/RequireAuth"
import IfSignedIn from "./higher-order-comps/IfSignedIn"
import Layout from "./components/Layout"
import OnNavigate from "./higher-order-comps/OnNavigate"

const LayoutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => (
      <Layout {...routeProps}>
        <Component {...routeProps} />
      </Layout>
    )}
  />
)

const App = () => (
  <Fragment>
    <Router>
      <OnNavigate>
        <Switch>
          <LayoutRoute path="/" exact component={IfSignedIn(Home)} />
          <LayoutRoute path="/chat" exact component={RequireAuth(Chat)} />
          <LayoutRoute path="/sign-up-1" exact component={SignUp1} />
          <LayoutRoute path="/sign-up-2" exact component={SignUp2} />
        </Switch>
      </OnNavigate>
    </Router>
  </Fragment>
)

export default hot(module)(App)
