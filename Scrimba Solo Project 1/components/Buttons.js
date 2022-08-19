import React from 'react';

export default function Buttons() {
    return (
        <div className="button-container">
            <div className="email-button">
                <img src='./images/mail-icon.png' alt='email icon' className='email-icon'/><p>Email</p>
            </div>
            <div className="linkedin-button">
                <img src='./images/linkedin.png' alt='linkedin icon' className='linkedin-icon'/><p>LinkedIn</p>
            </div>
        </div>
    )
}