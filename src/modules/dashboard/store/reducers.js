import { generateAsyncReducer } from "../../../utils";
import { UserActions } from '../../login/store/consts';
import { combineReducers } from "redux";
import { assignments, courses, allCourses } from "../components/student/store/reducers";

const info = generateAsyncReducer(UserActions.getUser)

export const user = combineReducers({
    assignments,
    info,
    courses,
    allCourses,
});