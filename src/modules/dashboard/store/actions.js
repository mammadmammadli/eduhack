import { UserActions } from "../../login/store/consts";
import { getUserService } from "./services";

export const getUser = () => ({
    type: UserActions.getUser,
    payload: getUserService()
})

export const updateUserCourses = (payload) => ({
    type: UserActions.getUser,
    payload
})