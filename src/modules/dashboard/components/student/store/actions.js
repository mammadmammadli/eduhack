import { studentActions } from "./consts";
import { getCoursesService, getAssignmentsService, getAllCourseService, enrollCourseService, unenrollCourseService } from "./services";

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

export const enrollCourse = (id) => ({
    type: studentActions.enrolCourse,
    payload: enrollCourseService(id)
})

export const unenrollCourse = (id) => ({
    type: studentActions.unenrollCourse,
    payload: unenrollCourseService(id)
})