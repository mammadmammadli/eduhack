import { generateAsyncSagaWatcher } from "../../../utils";
import { UserActions } from './consts';

export const userSaga = generateAsyncSagaWatcher(UserActions.getUser);