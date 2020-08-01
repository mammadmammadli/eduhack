import { generateAsyncReducer } from "../../../utils";
import { UserActions } from "../../login/store/consts";

export const userSaga = generateAsyncReducer(UserActions.getUser);