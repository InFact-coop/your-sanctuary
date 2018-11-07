import { createAction } from "redux-actions"

import { LOAD_CRISP } from "./types"

const load_crisp = createAction(LOAD_CRISP)
// const setErrorFlash = createAction(SET_ERROR_FLASH)

// eslint-disable-next-line
export const loadCrisp = () => dispatch => {
  try {
    dispatch(load_crisp(true))
  } catch (e) {
    // eslint-disable-next-line
    console.log("e", e)
  }
}
