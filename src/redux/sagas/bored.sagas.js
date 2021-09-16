import { put, call, takeLatest } from "redux-saga/effects";
import { deleteElementFromArray, shuffleArray } from "../../components/utils";
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
import apiCall from "../api";
import API from "../api/config";

function* getBoredData({ payload }) {
  try {
    const results = yield call(apiCall, "get", `${API}/activity/list`);
    const shuffleResults = shuffleArray(results);
    yield put({ type: SUCCESS_GET_BORED_DATA, payload: shuffleResults });
  } catch (err) {
    console.warn("Hey! There is an error on getBoredData Saga", err);
  }
}

function* getRandomTask({ payload }) {
  try {
    const results = yield call(apiCall, "get", `${API}/activity`);
    yield put({ type: SUCCESS_GET_RANDOM_TASK, payload: results });
  } catch (err) {
    console.warn("Hey! There is an error on getRandomTask Saga", err);
  }
}

function* setFavs(payload) {
  try {
    localStorage.setItem("favs", JSON.stringify(payload.arrBoredIs));
    yield put({ type: SUCCESS_SET_FAVS, payload: payload.arrBoredIs });
  } catch (err) {
    console.warn("Hey! There is an error on setFavs Saga", err);
  }
}

function* getFavs(payload) {
  try {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    yield put({ type: SUCCESS_GET_FAVS, payload: favs });
  } catch (err) {
    console.warn("Hey! There is an error on getFavs Saga", err);
  }
}

function* deleteFavs(payload) {
  try {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const cleanedFav = deleteElementFromArray(favs, payload.id);
    localStorage.setItem("favs", JSON.stringify(cleanedFav));
    yield put({ type: SUCCESS_DELETE_FAVS, payload: cleanedFav });
  } catch (err) {
    console.warn("Hey! There is an error on deleteFavs Saga", err);
  }
}

function* addFav(payload) {
  try {
    let fav = JSON.parse(localStorage.getItem("favs")) || [];
    const { id } = payload;
    fav.push(id);
    localStorage.setItem("favs", JSON.stringify(fav));
    yield put({ type: SUCCESS_ADD_FAV, payload: fav });
  } catch (err) {
    console.warn("Hey! There is an error on addFav Saga", err);
  }
}
//WATCHER
export default function* boredData() {
  yield takeLatest(START_FETCH_BORED_DATA, getBoredData);
  yield takeLatest(START_GET_RANDOM_TASK, getRandomTask);
  yield takeLatest(START_SET_FAVS, setFavs);
  yield takeLatest(START_GET_FAVS, getFavs);
  yield takeLatest(START_DELETE_FAVS, deleteFavs);
  yield takeLatest(START_ADD_FAV, addFav);
}
