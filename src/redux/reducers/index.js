import {
  START_FETCH_BORED_DATA,
  SUCCESS_GET_BORED_DATA,
  START_GET_RANDOM_TASK,
  SUCCESS_GET_RANDOM_TASK,
  START_SET_FAVS,
  SUCCESS_SET_FAVS,
  START_GET_FAVS,
  SUCCESS_GET_FAVS,
  START_DELETE_FAVS,
  SUCCESS_DELETE_FAVS,
  START_ADD_FAV,
  SUCCESS_ADD_FAV,
} from "../actions/bored.action";

const initialState = {
  allData: [],
  randomTask: {},
  favs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH_BORED_DATA:
      return state;
    case SUCCESS_GET_BORED_DATA:
      return { ...state, allData: action.payload };
    case START_GET_RANDOM_TASK:
      return { ...state, randomTask: {} };
    case SUCCESS_GET_RANDOM_TASK:
      return { ...state, randomTask: action.payload };
    case START_SET_FAVS:
      return { ...state };
    case SUCCESS_SET_FAVS:
      return { ...state, favs: action.payload };
    case START_GET_FAVS:
      return { ...state };
    case SUCCESS_GET_FAVS:
      return { ...state, favs: action.payload };
    case START_DELETE_FAVS:
      return { ...state };
    case SUCCESS_DELETE_FAVS:
      return { ...state, favs: action.payload };
    case START_ADD_FAV:
      return { ...state };
    case SUCCESS_ADD_FAV:
      return { ...state, favs: action.payload };
    default:
      return state;
  }
};

export default reducer;
