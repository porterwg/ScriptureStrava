import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/Group" style={{ marginRight: '10px' }}>Group</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Navbar;
