import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/actions';
import {isSuccess } from '../../../utils';
import { StudentPage } from './student/components';
import { ProfessorPage } from './professor/components';
import './index.scss';

export const Dashboard = () => {
    const dispatch = useDispatch()
    const userBranch = useSelector(state => state.user);

    useEffect(
        () => {
            if (localStorage.getItem('id') && localStorage.getItem('token')) {
                dispatch(getUser())
            }
        },
        [dispatch]
    )

    const renderContent = () => {
        let content = null;

        if (isSuccess(userBranch)) {
            const { data } = userBranch;

            if (data.role === 'student') {
                content = <StudentPage />
            } else {
                content = <ProfessorPage />
            }
        }

        return content;
    }

    return (
        <div className='dashboard'>
            {renderContent()}
        </div>
    )
}