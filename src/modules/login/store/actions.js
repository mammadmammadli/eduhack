import { UserActions } from "./consts";
import { getUserService, loginService } from './services';

export const getUser = () => ({
    type: UserActions.getUser,
    payload: getUserService()
})

export const login = (body) => ({
    type: UserActions.login,
    payload: loginService(body)
})