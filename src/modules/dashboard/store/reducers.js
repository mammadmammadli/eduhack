import { generateAsyncReducer } from "../../../utils";
import { UserActions } from '../../login/store/consts';
import { combineReducers } from "redux";
import { courses } from "../components/student/store/reducers";

const info = generateAsyncReducer(UserActions.getUser)

export const user = combineReducers({
    info,
    courses    
});