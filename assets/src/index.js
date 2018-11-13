import { render } from "react-dom"
import { Provider } from "react-redux"
import store from "./state"
import App from "./App"
import "./styles/index.css"
import "babel-polyfill"

const root = document.getElementById("root")

const load = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )

load()
