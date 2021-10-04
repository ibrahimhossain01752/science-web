import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Serve from './Serve';
import './Service.css';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./cart.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <Row xs={1} md={3} className="g-4">
            {
                service.map(service => <Serve service={service}></Serve>)
            }
        </Row>
    );
};

export default Service;


/*

<div className="serve">
            {
                service.map(service => <Serve service={service}></Serve>)
            }
        </div>


*/