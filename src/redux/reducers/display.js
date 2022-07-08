/** @format */

import { ADD_SONG } from "../actions";

const initialState = {
  song: {},
};

const displayReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_SONG:
      return {
        song: payload,
      };
    default:
      return state;
  }
};

export default displayReducer;
