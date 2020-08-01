import { httpClient } from "../../../httpClient"

export const getUserService = () => {
    return httpClient.get('user');
}

export const loginService = (data) => {
    return httpClient.post('users/login', data);
}