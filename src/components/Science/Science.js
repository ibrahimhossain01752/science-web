import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
//About
const Science = (props) => {
    const { name, about, img } = props.about;
    const history = useHistory();

    const handleContact = () => {
        history.push('./contact')
    }
    return (
        <Card className="bg-dark text-white p-520px gap-50 w-50  mb-100">

            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {about}
            </Card.Text>
            <button onClick={handleContact} className="btn-regular">Contact</button>
        </Card>

    );
};

export default Science;