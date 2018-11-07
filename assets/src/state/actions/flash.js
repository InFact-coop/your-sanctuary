import {
  CLEAR_FLASH_MESSAGES,
  SET_ERROR_FLASH,
  SET_INFO_FLASH,
  SET_WARNING_FLASH,
} from "./types"
import { createAction } from "redux-actions"

export const clearFlashMessages = createAction(CLEAR_FLASH_MESSAGES)

export const setErrorFlash = createAction(SET_ERROR_FLASH)
export const setInfoFlash = createAction(SET_INFO_FLASH)
export const setWarningFlash = createAction(SET_WARNING_FLASH)
