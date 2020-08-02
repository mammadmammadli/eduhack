import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isSuccess, isPending } from '../../../../../../utils';
import { getAllCourses } from '../../store/actions';
import { convertTime, detectDay } from '../utils';
import { ReactComponent as GreenTri } from '../../../../../../assets/images/greenTriangle.svg'
import { ReactComponent as RedTri } from '../../../../../../assets/images/redTriangle.svg'

export const Registrar = () => {
    const allCoursesBranch = useSelector(state => state.user.allCourses)
    const userInfo = useSelector(state => state.user.info)
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(getAllCourses())
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

    const renderCourseButton = (id) => {
        const { data: { courses: userCourses } } = userInfo
        let content = null

        if (userCourses && userCourses.length > 0 && userCourses.includes(id)) {
            content = <><span>Uneroll</span> <RedTri /></>
        } else {
            content = <><span>Enroll</span> <GreenTri /></>
        }

        return (
            <button>
                {content}
            </button>
        )
    }

    const renderCourses = () => {
        if (isSuccess(allCoursesBranch) && isSuccess(userInfo)) {
            const { data: courses } = allCoursesBranch

            return (
                <div className='studentPage__courses__table-table'>
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Class name / Code</th>
                                <th>Professor</th>
                                <th>Time / Date</th>
                                <th>Semester</th>
                                <th>Status Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map(({
                                title,
                                term,
                                professor,
                                occurrence,
                                _id: id
                            }, i) => {
                                const close = closeTime(occurrence)

                                return (
                                    <tr key={i}>
                                        <td>{title}</td>
                                        <td>{professor}</td>
                                        <td>
                                            {convertTime(close.time)} /
                                            {detectDay(close.day)}
                                        </td>
                                        <td>{term}</td>
                                        <td>
                                            {renderCourseButton(id)}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )
        } else if (isPending(allCoursesBranch)) {
            return (
                <div className='studentPage__courses__table-loading'>
                    Loading...
                </div>
            )
        }
    }

    return (
        <div>
            <div className='studentPage__registrar__filter'>

            </div>
            {renderCourses()}
        </div>
    )
}