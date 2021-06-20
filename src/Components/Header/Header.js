import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import fresh from './fresh.png';

const Header = () => {
    return (
        <div className="container">
            <Navbar  variant="dark">
            <img style={{height:'30px'}} src={fresh} alt=""/>
                <Nav className="ml-auto ">
                    <Link to="/home">Home</Link>
                    <Link to ="/addOrder">Add Order</Link>
                    <Link to="/login" className="btn btn-primary">Login</Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;