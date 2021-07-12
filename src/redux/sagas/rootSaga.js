import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import { savePeople, savePlanets } from "../reducers/actions";

const getData = async (url) => {
  const body = await fetch(url);
  const data = await body.json();
  return data.results;
};
// 2 - воркер, который активируется через вотчер
export function* workerSaga() {
  // call для работы с асинхронными функциями
  const [people, planets] = yield all([
    call(getData, "https://swapi.dev/api/people/"),
    call(getData, "https://swapi.dev/api/planets/"),
  ]);
  yield put(savePeople(people)); // put == dispatch
  yield put(savePlanets(planets)); // put == dispatch
}

// 1 - следим... если запуситил экшен, то значит запускам воркер
export function* watchClickSaga() {
  yield takeEvery("SET_DATA", workerSaga);
}

//0 - запускает корневой процесс
export default function* rootSaga() {
  yield fork(watchClickSaga); // запскаем вотчер; fork - не блокирующий вызов
}
