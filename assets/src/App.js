import { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader"

import { Home, Chat, SignUp1, SignUp2, SignUp3, Login } from "./pages"

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
          <LayoutRoute path="/signup-1" exact component={IfSignedIn(SignUp1)} />
          <LayoutRoute path="/signup-2" exact component={IfSignedIn(SignUp2)} />
          <LayoutRoute path="/signup-3" exact component={IfSignedIn(SignUp3)} />
          <LayoutRoute path="/login" exact component={IfSignedIn(Login)} />
        </Switch>
      </OnNavigate>
    </Router>
  </Fragment>
)

export default hot(module)(App)
