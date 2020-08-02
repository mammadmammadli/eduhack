import React from 'react'
import { ReactComponent as File } from '../../../../../../assets/emojies/file.svg'
import { ReactComponent as Books } from '../../../../../../assets/emojies/books.svg'
import Grid from '@material-ui/core/Grid'
import { Announcements } from './announcements'

export const Courses = () => {
    return (
        <div>
            <Grid container>
                <Grid item md={7}>
                    <div className='studentPage__courses__table-title'>
                        <File /> Active Courses
                    </div>
                    <div className='studentPage__courses__table-table'>
                        <table cellPadding={0} cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Weight</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Midterm</td>
                                    <td>Exam</td>
                                    <td>25%</td>
                                    <td>90/100</td>
                                </tr>
                                <tr>
                                    <td>Application of integrals</td>
                                    <td>Assignment</td>
                                    <td>10%</td>
                                    <td>95/100</td>
                                </tr>
                                <tr>
                                    <td>Integrals understanding</td>
                                    <td>In-class</td>
                                    <td>2%</td>
                                    <td>10/10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Grid>
                <Grid item md={5}>
                    <div style={{ padding: '0 40px' }}>
                        <Announcements />
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <div style={{marginTop: '50px'}} className='studentPage__courses__table-title'>
                    <Books /> Active Courses
                </div>
                <div className='studentPage__courses__table-table'>
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Weight</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Midterm</td>
                                <td>Exam</td>
                                <td>25%</td>
                                <td>90/100</td>
                            </tr>
                            <tr>
                                <td>Application of integrals</td>
                                <td>Assignment</td>
                                <td>10%</td>
                                <td>95/100</td>
                            </tr>
                            <tr>
                                <td>Integrals understanding</td>
                                <td>In-class</td>
                                <td>2%</td>
                                <td>10/10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Grid>
        </div>
    )
}