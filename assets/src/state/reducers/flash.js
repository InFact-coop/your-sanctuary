import {
  CLEAR_FLASH_MESSAGES,
  SET_ERROR_FLASH,
  SET_INFO_FLASH,
  SET_WARNING_FLASH,
  SET_MODAL,
} from "../actions/types"

const INITIAL_STATE = {
  error: null,
  warning: null,
  info: null,
  modal: null,
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CLEAR_FLASH_MESSAGES:
      return INITIAL_STATE
    case SET_ERROR_FLASH:
      return { ...state, error: payload }
    case SET_INFO_FLASH:
      return { ...state, info: payload }
    case SET_WARNING_FLASH:
      return { ...state, warning: payload }
    case SET_MODAL:
      return { ...state, modal: payload }
    default:
      return state
  }
}
