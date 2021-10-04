import React, { useEffect, useState } from 'react';
import Science from './Science';

//About

const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('./about.JSON')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [])
    return (
        <div>
            {
                about.map(about => <Science about={about}></Science>)
            }
        </div>
    );
};

export default About;