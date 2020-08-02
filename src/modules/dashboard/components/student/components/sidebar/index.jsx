import React from 'react';

import './index.scss';
import { ReactComponent as Vogel } from '../../../../../../assets/images/vogel.svg';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Files } from '../../../../../../assets/images/files.svg'
import { ReactComponent as File } from '../../../../../../assets/images/file.svg'
import { ReactComponent as Books } from '../../../../../../assets/images/books.svg'

export const SiderBar = withRouter(({ active, location }) => {
    return (
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <div>
                    <Vogel />
                </div>
                <div>
                    <span>Vogel</span>
                </div>
            </div>
            <div className='sidebar__nav'>
                <nav>
                    <ul>
                        <li className={`${location.pathname === '/dashboard' ? 'active' : null}`}>
                            <Link to='/dashboard'>
                                Dashboard
                            </Link>
                            <Files />
                        </li>
                        <li className={`${location.pathname === '/dashboard/registrar' ? 'active' : null}`}>
                            <Link to='/dashboard/registrar'>
                                Registrar
                            </Link>
                            <File />
                        </li>
                        <li className={`${location.pathname === '/dashboard/courses' ? 'active' : null}`}>
                            <Link to='/dashboard/courses'>
                                Courses
                            </Link>
                            <Books />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='sidebar__updates'>
                <span>Updates and Messages</span>
                <div className='sidebar__updates__update'>
                    <div>
                        <span>Calculus 1</span>
                        <span>15.04.2020</span>
                    </div>
                    <div>
                        Class canceled next Monday!
                    </div>
                </div>
            </div>
        </div>
    )
})