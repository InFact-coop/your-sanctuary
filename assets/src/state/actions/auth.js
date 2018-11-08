import { createAction } from "redux-actions"
import axios from "axios"

import { SIGN_UP, SIGN_IN, SET_ERROR_FLASH } from "./types"

const sign_up = createAction(SIGN_UP)
const sign_in = createAction(SIGN_IN)
const setErrorFlash = createAction(SET_ERROR_FLASH)

// eslint-disable-next-line
export const signUp = (values, callback) => async dispatch => {
  try {
    const {
      data: { data },
    } = await axios.post("/api/sign_up", { user: values })

    sessionStorage.setItem("jwt", data.jwt)
    dispatch(sign_up(data))
    callback()
  } catch (e) {
    // eslint-disable-next-line
    console.log("e", e)
    if (e.response.data.email) {
      const errorMessage = "This email ".concat(e.response.data.email)
      dispatch(setErrorFlash(errorMessage))
    }
  }
}

export const signIn = ({ code }, callback) => async dispatch => {
  try {
    const {
      data: { data },
    } = await axios.post("/api/sign_in", { uuid: code })

    sessionStorage.setItem("jwt", data.jwt)
    dispatch(sign_in(data))
    callback()
  } catch (e) {
    // eslint-disable-next-line
    console.log("e", e.response)
    if (e.response.data.error) {
      dispatch(setErrorFlash(e.response.data.error))
    }
  }
}
