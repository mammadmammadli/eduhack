import React from 'react';
import { SiderBar } from './sidebar';

import './index.scss'
import { Switch, Route, BrowserRouter as Router, useRouteMatch, withRouter } from 'react-router-dom';
import { ActiveCourses } from './activeCourses';
import { Registrar } from './registrar';
import { Courses } from './courses';

export const StudentPage = withRouter(({ location }) => {
    const { path, url } = useRouteMatch()

    return (
        <div className='studentPage'>
            <SiderBar active={path} />

            <div className='studentPage__content'>
                {location.pathname !== '/dashboard/courses' && (
                    <div className='studentPage__content__intro'>
                        <span>Welcome, Nina</span>
                        <span>Not every bird is a bird and not anyone who is a bird actually a bird</span>
                    </div>
                )}
                <Switch>
                    <Route exact path={`${path}/registrar`} component={Registrar} />
                    <Route exact path={`${path}/`} component={ActiveCourses} />
                    <Route exact path={`${path}/courses`} component={Courses} />
                    {/* <Route exact path={`${path}/courses`} component={Courses} /> */}
                </Switch>
            </div>
        </div>
    )
})