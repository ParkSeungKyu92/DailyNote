import { call, put } from 'redux-saga/effects';

export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, reuqest) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function*(action) {
        try {
            const response = yield call(reuqest, action.payload);
            yield put({
                type : SUCCESS,
                payload : response.data,
                meta : response
            });
        }
        catch(e) {
            yield put({
                type : FAILURE,
                payload : e,
                error : true
            });
        }
    };
}