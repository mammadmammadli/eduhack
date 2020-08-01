import { httpClient } from "../../../httpClient";

export const getUserService = () => {
    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')

    return httpClient.get(`users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}