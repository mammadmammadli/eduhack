import { generateAsyncReducer } from "../../../utils";
import { UserActions } from '../../login/store/consts';

export const user = generateAsyncReducer(UserActions.getUser);