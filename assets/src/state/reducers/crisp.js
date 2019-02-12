import { CRISP_ONLINE } from "../actions/types"

const INITIAL_STATE = {
  crisp_online: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CRISP_ONLINE:
      return {
        ...state,
        crisp_online: action.payload === "online",
      }
    default:
      return state
  }
}
