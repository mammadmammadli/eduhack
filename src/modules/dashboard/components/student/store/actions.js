import { studentActions } from "./consts";
import { getCoursesService } from "./services";

export const getCourses = () => ({
    type: studentActions.getCourses,
    payload: getCoursesService()
})