import {
  getCards,
  getCardsSuccess,
  getCardsError
} from "./actions";

export const fetchCards = () => {
  return dispatch => {
    dispatch(getCards());
    fetch("/cards")
      .then(res => res.json())
      .then(data => {
        dispatch(getCardsSuccess(data));
      })
      .catch(error => {
        dispatch(getCardsError(error.message));
      });
  };
};
