import React from 'react';
import { Card } from 'react-bootstrap';

//contact

const Phone = (props) => {
    const { name, phone } = props.contact;

    return (
        <div>
            <Card border="secondary" gap="20px" style={{ width: '18rem' }}>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <Card.Title>{phone}</Card.Title>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Phone;