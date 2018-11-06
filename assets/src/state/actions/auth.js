import { createAction } from "redux-actions"
import axios from "axios"

import { SIGN_UP } from "./types"

const sign_up = createAction(SIGN_UP)

// eslint-disable-next-line
export const signUp = values => async dispatch => {
  const res = await axios.post("/api/sign_up", { user: values })
  console.log("res", res)
  // dispatch(sign_up())
}
