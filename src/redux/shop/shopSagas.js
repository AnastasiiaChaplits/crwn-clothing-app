import { takeLatest, call, put } from "redux-saga/effects";

import ShopActionTypes from "./shopTypes";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shopActions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
