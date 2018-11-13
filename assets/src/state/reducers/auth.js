import { SIGN_UP, SIGN_IN } from "../actions/types"

const INITIAL_STATE = {
  uuid: "",
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        uuid: action.payload.user.uuid,
      }
    case SIGN_IN:
      return {
        ...state,
        uuid: action.payload.user.uuid,
      }
    default:
      return state
  }
}
