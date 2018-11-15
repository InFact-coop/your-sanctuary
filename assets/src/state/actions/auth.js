import { createAction } from "redux-actions"
import axios from "axios"

import { SIGN_UP, SIGN_IN } from "./types"

import { setErrorFlash, setModal } from "./flash"
import { emailModal, reminderModal } from "../../components/modals/modals"

const sign_up = createAction(SIGN_UP)
const sign_in = createAction(SIGN_IN)

// eslint-disable-next-line
export const signUp = (values, callback) => async dispatch => {
  try {
    const {
      data: { data },
    } = await axios.post("/api/sign-up", { user: values })

    sessionStorage.setItem("jwt", data.jwt)
    sessionStorage.setItem("uuid", data.user.uuid)
    dispatch(sign_up(data))
    callback()
    if (values.email) dispatch(setModal(emailModal))
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
    } = await axios.post("/api/sign-in", { uuid: code })

    sessionStorage.setItem("jwt", data.jwt)
    sessionStorage.setItem("uuid", data.user.uuid)
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

export const requestCodeReminder = ({ email }) => async dispatch => {
  try {
    axios.post("/api/code-reminder/", { email })
    dispatch(setModal(reminderModal))
  } catch (e) {
    if (e.response && e.response.data && e.response.data.error) {
      return dispatch(setErrorFlash(e.response.data.error))
    }
    dispatch(setErrorFlash("There was a problem sending the reminder email"))
  }
}
