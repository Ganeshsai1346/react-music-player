/** @format */

export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const ADD_SONG = "ADD_SONG";

export const addLike = (song) => ({
  type: ADD_LIKE,
  payload: song,
});

export const removeLike = (song) => ({
  type: REMOVE_LIKE,
  payload: song,
});

export const displaySong = (song) => ({
  type: ADD_SONG,
  payload: song,
});
