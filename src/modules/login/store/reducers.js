import { generateAsyncReducer } from "../../../utils";
import { UserActions } from './consts';

export const userReducers = generateAsyncReducer(UserActions.getUser);