import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h2>Click item below: {category}</h2>
            <button onClick={()=> setCategory('laptop')}>Laptop</button>
            <button onClick={()=> setCategory('mobile')}>Mobile</button>
            <button onClick={()=> setCategory('camera')}>Camera</button>
        </div>
    );
};

export default Header;