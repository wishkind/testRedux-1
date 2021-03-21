import {delay} from 'redux-saga/effects';

import {takeEvery, call, put, take, fork, select, takeLatest, all} from 'redux-saga/effects';


import {INC_ASYNC, INC, DEC} from '../actions/counter';

function* incAsync() {
   yield call (delay, 6000)
   yield put({type: "INC_ASYNC"})
}
function* watchAsync() {
    yield takeLatest(INC_ASYNC, incAsync);
};


export  const counterSagas = [watchAsync(),];


 
