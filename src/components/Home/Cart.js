import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Cart.css';

const Cart = (props) => {
    const { img, title, Price } = props.cart;
    const history = useHistory();
    const handleDetails = () => {
        history.push('/service')
    }
    return (
        <Col >
            <Card >
                <Card.Img variant="top" className="image-1" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {Price}
                    </Card.Text>
                </Card.Body>
                <button onClick={handleDetails} className="btn-regular">Details</button>
            </Card>
        </Col>
    );
};

export default Cart;


/*

<div className="body">
            <img className="image" src={img} alt="" />
            <h3>Title:{title}</h3>
            <h4>Price:{Price}</h4>
            <button onClick={handleDetails} className="btn-regular">Details</button>
        </div>


*/