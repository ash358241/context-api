import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
                <h1>the product is: {category}</h1>
                <Categories></Categories>
        </div>
    );
};

export default Home;