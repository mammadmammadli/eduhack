import { combineReducers } from "redux";
import { generateAsyncReducer } from "../../../../../utils";
import { studentActions } from "./consts";

export const allCourses = generateAsyncReducer(studentActions.getAllCourses) 

export const courses = generateAsyncReducer(studentActions.getCourses)

export const assignments = generateAsyncReducer(studentActions.getAsignments)