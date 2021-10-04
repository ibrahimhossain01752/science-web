import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Serve.css';

const Serve = (props) => {
    const { name, img, duration, lecturer } = props.service;
    const history = useHistory();
    const handleAbout = () => {
        history.push('/about')
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" className="image" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {lecturer}

                    </Card.Text>
                </Card.Body>
                <button onClick={handleAbout} className="btn-regular">About</button>
            </Card>

        </Col>

    );
};

export default Serve;


/*

  <div className="service">
            <img className="image" src={img} alt="" />
            <h4>Name:{name}</h4>
            <h4>Lecturer:{lecturer}</h4>
            <h4>Duration:{duration}</h4>
        </div>

*/