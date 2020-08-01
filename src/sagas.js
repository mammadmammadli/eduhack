import { all } from 'redux-saga/effects'
import { userSaga } from './modules/login/store/sagas';

export function* rootSaga () {
    yield all([userSaga]);
}