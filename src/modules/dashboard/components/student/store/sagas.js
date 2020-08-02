import { generateAsyncReducer } from "../../../utils";
import { studentActions } from "./consts";

export const userSaga = generateAsyncReducer(studentActions.getCourses);