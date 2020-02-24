import {
  GET_CARDS,
  GET_CARDS_SUCCESS,
  GET_CARDS_FAILED,
  MOVE_MOUSE,
  CHANGE_COLOR_THEME
} from "./const";
import { combineReducers } from "redux";

const initialMainState = {
  activeColorTheme: "base",
  loading: false,
  error: null
};
const initialAboutState = {
  mouse: "center",
  cards: {
    loading: false,
    error: null
  }
};

function mainReducer(state = initialMainState, action) {
  switch (action.type) {
    case CHANGE_COLOR_THEME:
      return Object.assign({}, state, {
        activeColorTheme: action.payload.value
      });
    default:
      return state;
  }
}

function aboutReducer(state = initialAboutState, action) {
  switch (action.type) {
    case MOVE_MOUSE:
      return Object.assign({}, state, {
        mouse: action.payload.value
      });
    case GET_CARDS:
      return Object.assign({}, state, {
        cards: {
          ...state.cards,
          loading: true,
          error: null
        }
      });
    case GET_CARDS_SUCCESS:
      return Object.assign({}, state, {
        cards: {
          ...state.cards,
          ...action.payload.value,
          loading: false,
          error: null
        }
      });
    case GET_CARDS_FAILED:
      return Object.assign({}, state, {
        cards: {
          ...state.cards,
          loading: false,
          error: action.payload.error
        }
      });
    default:
      return state;
  }
}
const rootReducer = combineReducers({ main: mainReducer, about: aboutReducer });

export default rootReducer;
