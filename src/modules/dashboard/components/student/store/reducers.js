import { combineReducers } from "redux";
import { generateAsyncReducer } from "../../../../../utils";
import { studentActions } from "./consts";

export const courses = generateAsyncReducer(studentActions.getCourses)
