import { SIGN_UP, SIGN_IN } from "../actions/types"

const INITIAL_STATE = {
  token: "",
  uuid: "",
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        uuid: action.payload.user.uuid,
        token: action.payload.jwt,
      }
    case SIGN_IN:
      return {
        ...state,
        uuid: action.payload.user.uuid,
        token: action.payload.jwt,
      }
    default:
      return state
  }
}
