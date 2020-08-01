import { httpClient } from "../../../httpClient"

export const loginService = (data) => {
    return httpClient.post('users/login', data);
}