import React from 'react'
import { ReactComponent as Alert } from '../../../../../../assets/emojies/alert.svg'

export const Announcements = () => {
    return (
        <div className='announcements'>
            <div className='announcements__title'>
                <Alert /> <span>Announcements</span>
            </div>
            <div className='announcements__inner'>
                <ul>
                    <li>Q/A for 11.1 class is ready</li>
                    <li>Q/A for 11.1 class is ready</li>
                </ul>
            </div>
        </div>
    )
}