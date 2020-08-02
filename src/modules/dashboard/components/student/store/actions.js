import { studentActions } from "./consts";
import { getCoursesService, getAssignmentsService, getAllCourseService } from "./services";

export const getCourses = () => ({
    type: studentActions.getCourses,
    payload: getCoursesService()
})

export const getAllCourses = () => ({
    type: studentActions.getAllCourses,
    payload: getAllCourseService()
})

export const getAssignments = () => ({
    type: studentActions.getAsignments,
    payload: getAssignmentsService()
})