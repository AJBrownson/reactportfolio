import React from 'react';
import { Home, HomeItems, Social, Links1, Links2, Links3, Links4 } from './HomeView.elements';
import profilePic from '../../Assets/profilePic.png';

function HomeView() {
    return(
        <>
            <Home>
                <HomeItems>
                <h1>Hello there, I'm Anietie Brownson</h1>
                <br />
                <h2>I'm a Web Developer based in Nigeria</h2>
                <Social to='/'>
                    <Links1 />
                    <Links2 />
                    <Links3 />
                    <Links4 />
                </Social>
                </HomeItems>
            <img src={profilePic} alt='My Snapshot' />
            </Home>
        </>
    );
}

export default HomeView;