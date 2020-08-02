import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses, getAssignments } from '../../store/actions';
import { isSuccess, isPending } from '../../../../../../utils';
import { ReactComponent as Book } from '../../../../../../assets/emojies/book.svg';
import { ReactComponent as Calendar } from '../../../../../../assets/emojies/calendar.svg';
import { detectDay, convertTime } from '../utils';

export const ActiveCourses = () => {
    const coursesBranch = useSelector(state => state.user.courses)
    const assignmentsBranch = useSelector(state => state.user.assignments)
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(getCourses())
            dispatch(getAssignments())
        },
        [dispatch]
    )

    const closeTime = (occurrences) => {
        const current = new Date()
        const currentWeekDay = current.getDay() === 0 ? 7 : current.getDay() - 1
        let close = null

        occurrences.forEach((o, i) => {
            if (i === 0) {
                close = o;
            } else {
                if (o.day - currentWeekDay < close.day - currentWeekDay) {
                    close = o;
                }
            }
        })

        return close
    }

    const renderCourses = () => {
        if (isSuccess(coursesBranch)) {
            const courses = coursesBranch.data;

            return (
                <div className='studentPage__courses__table-table'>
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Course Name / Type</th>
                                <th>Professor</th>
                                <th>Time / Date</th>
                                <th>Time till class</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses && courses.length > 0 && courses.map(({
                                professor,
                                type,
                                occurrence,
                            }, i) => {
                                const close = closeTime(occurrence)

                                return (
                                    <tr key={i}>
                                        <td>{type}</td>
                                        <td>{professor}</td>
                                        <td>
                                            {convertTime(close.time)} / 
                                            {detectDay(close.day)} 
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )
        } else if (isPending(coursesBranch)) {
            return (
                <div className='studentPage__courses__table-loading'>
                    Loading...
                </div>
            )
        }
    }

    const renderAssignments = () => {
        if (isSuccess(assignmentsBranch)) {
            const { data: assignments } = coursesBranch;

            return (
                <div className='studentPage__courses__table-table'>
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Course Name / Type</th>
                                <th>Professor</th>
                                <th>Time / Date</th>
                                <th>Time till class</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments && assignments.length > 0 && assignments.map(({
                                title,
                                due,
                                course,
                            }, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{title}</td>
                                        <td>{due}</td>
                                        <td>{course}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )
        } else if (isPending(assignmentsBranch)) {
            return (
                <div className='studentPage__courses__table-loading'>
                    Loading...
                </div>
            )
        }
    }

    return (
        <div className='studentPage__courses'>
            <div className='studentPage__courses__search'>
                <input type="search" placeholder="Search" />
            </div>
            <div className='studentPage__courses__table-title'>
                <Book /> Active Courses
            </div>

            {renderCourses()}

            <div className='studentPage__courses__table-title'>
                <Calendar /> Assignment Schedule
            </div>

            {renderAssignments()}
        </div>
    )
}