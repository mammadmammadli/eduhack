import { httpClient } from "../../../../../httpClient";

export const getCoursesService = () => {
    const token = localStorage.getItem('token')

    return httpClient.get(`courses/active`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const getAssignmentsService = () => {
    const token = localStorage.getItem('token')

    return httpClient.get(`assignments`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const getAllCourseService = () => {
    const token = localStorage.getItem('token')

    return httpClient.get(`courses`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}