import React, { useEffect, useState } from 'react';
import Phone from './Phone';

const Contact = () => {
    const [contact, setContact] = useState([]);
    useEffect(() => {
        fetch('./contact.JSON')
            .then(res => res.json())
            .then(data => setContact(data))
    }, [])
    return (
        <div>
            {
                contact.map(contact => <Phone contact={contact}></Phone>)
            }
        </div>
    );
};

export default Contact;