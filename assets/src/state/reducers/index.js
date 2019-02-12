import { combineReducers } from "redux"

import auth from "./auth"
import flash from "./flash"
import crisp from "./crisp"

export default combineReducers({
  auth,
  flash,
  crisp,
})
