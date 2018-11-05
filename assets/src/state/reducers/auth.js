import { CHANGE_COLOUR } from "../actions/types"

const INITIAL_STATE = {
  colour: "white",
}

const newCol = state => (state.colour === "white" ? "yellow" : "white")

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_COLOUR:
      return { ...state, colour: newCol(state) }
    default:
      return state
  }
}
