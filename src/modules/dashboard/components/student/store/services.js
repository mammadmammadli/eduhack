import { httpClient } from "../../../../../httpClient";

export const getCoursesService = () => {
    const token = localStorage.getItem('token')

    return httpClient.get(`courses/active`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}