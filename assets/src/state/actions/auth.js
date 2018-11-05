import { createAction } from "redux-actions";

import { CHANGE_COLOUR } from "./types";

const change_colour = createAction(CHANGE_COLOUR);

export const changeColour = () => dispatch => {
  dispatch(change_colour());
};
