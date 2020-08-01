import { UserActions } from "./consts";
import { loginService } from './services';

export const login = (body) => ({
    type: UserActions.login,
    payload: loginService(body)
})