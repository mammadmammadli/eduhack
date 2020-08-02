import { generateAsyncSagaWatcher } from "../../../utils";
import { UserActions } from './consts';
import { all } from "redux-saga/effects";
import { studentActions } from "../../dashboard/components/student/store/consts";

export const userSaga = all([
    generateAsyncSagaWatcher(UserActions.getUser),
    generateAsyncSagaWatcher(studentActions.getCourses),
    generateAsyncSagaWatcher(studentActions.getAsignments),
    generateAsyncSagaWatcher(studentActions.getAllCourses),
])