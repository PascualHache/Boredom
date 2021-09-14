export const START_FETCH_BORED_DATA = "START_FETCH_BORED_DATA";
export const SUCCESS_GET_BORED_DATA = "SUCCESS_GET_BORED_DATA";
export const START_GET_RANDOM_TASK = "START_GET_RANDOM_TASK";
export const SUCCESS_GET_RANDOM_TASK = "SUCCESS_GET_RANDOM_TASK";
export const START_SET_FAVS ="START_SET_FAVS";
export const SUCCESS_SET_FAVS ="SUCCESS_SET_FAVS";
export const START_GET_FAVS ="START_GET_FAVS";
export const SUCCESS_GET_FAVS ="SUCCESS_GET_FAVS";
export const START_DELETE_FAVS ="START_DELETE_FAVS";
export const SUCCESS_DELETE_FAVS ="SUCCESS_DELETE_FAVS";
export const START_ADD_FAV ="START_ADD_FAV";
export const SUCCESS_ADD_FAV ="SUCCESS_ADD_FAV";

export const startFetchBoredData = (payload) => ({
  type: START_FETCH_BORED_DATA,
  ...payload,
});

export const getRandomTask = (payload) => ({
  type: START_GET_RANDOM_TASK,
  ...payload,
});

export const setFavs = (arrBoredIs) => ({
  type: START_SET_FAVS,
  arrBoredIs,
});

export const getFavs = (arrBoredIs) => ({
  type: START_GET_FAVS,
  arrBoredIs,
});

export const deleteFavs = (id) => ({
  type: START_DELETE_FAVS,
  id,
});

export const addFav = (id) => ({
  type: START_ADD_FAV,
  id,
});