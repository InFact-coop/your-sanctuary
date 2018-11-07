import { LOAD_CRISP } from "../actions/types"

const INITIAL_STATE = {
  crispExists: false,
  crispId: "eb431f6c-af5b-4a5b-8822-b71066070599",
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_CRISP:
      return {
        ...state,
        crispExists: true,
      }
    default:
      return state
  }
}
