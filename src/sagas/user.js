import {takeEvery, take, call, put, all} from 'redux-saga/effects';
import axios from 'axios';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function* fetchUser() {
    try {
        const user = yield call(axios.get, "https://api.github.com/users/wishkind");    
        yield put({type: 'FETCH_SUCCESS'});
    }catch(e) {
        yield put({type: 'FETCH_FAILURE'});
    }
}


function* watchFetchUser() {
    yield all([
        takeEvery('FETCH_REQUEST', fetchUser)
    ])
}

export const  userSagas = [watchFetchUser(),];
