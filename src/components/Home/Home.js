import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Cart from './Cart';
import './Home.css';

const Home = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    return (
        <Row xs={1} md={3} className="g-2 ">
            {

                cart.map(cart => <Cart cart={cart}></Cart>)

            }
        </Row>
    );
};

export default Home;


/*

 <div>
            {
                cart.map(cart => <Cart cart={cart}></Cart>)
            }
        </div>


*/