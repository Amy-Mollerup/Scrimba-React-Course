import React from 'react';

export default function Header() {
    return(
        <header>
            <img src="./images/headshot.jpg" width="400px" alt="headshot" className="headshot" />
            <h1 className="name">Amy Mollerup</h1>
            <h3 className="title">Full Stack Developer</h3>
            <p className="website">amymollerup.website</p>
        </header>
    )
}