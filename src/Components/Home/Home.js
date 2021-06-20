import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';

const Home = () => {
    const [events, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/order')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div class="row d-flex align-items-center">
           
            {
                events.map(order =><Order order={order}></Order>)
            }
        </div>
    );
};

export default Home;