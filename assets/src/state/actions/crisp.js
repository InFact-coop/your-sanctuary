import { createAction } from "redux-actions"
import axios from "axios"

import { CRISP_ONLINE } from "./types"

const crisp_online = createAction(CRISP_ONLINE)

// eslint-disable-next-line
export const checkCrispOnlineStatus = () => async dispatch => {
  try {
    const {
      data: {
        data: { status },
      },
    } = await axios.get("/api/crisp-online")

    console.log("state", status)
    dispatch(crisp_online(status))
  } catch (e) {
    // eslint-disable-next-line
    console.log("e", e)
  }
}
