import {
  GET_CARDS,
  GET_CARDS_SUCCESS,
  GET_CARDS_FAILED,
  CHANGE_COLOR_THEME,
  MOVE_MOUSE
} from "./const";

export const getCards = () => ({ type: GET_CARDS });
export const getCardsSuccess = value => ({
  type: GET_CARDS_SUCCESS,
  payload: { value }
});
export const getCardsError = error => ({
  type: GET_CARDS_FAILED,
  payload: { error }
});

export const moveMouse = e => {
  const result =
    e.clientY < 100
      ? "top"
      : e.clientX < document.body.clientWidth / 3
      ? "left"
      : e.clientX > (document.body.clientWidth * 2) / 3
      ? "right"
      : "center";
  return {
    type: MOVE_MOUSE,
    payload: { value: result }
  };
};

export const changeColorTheme = theme => ({
  type: CHANGE_COLOR_THEME,
  payload: { value: theme }
});
