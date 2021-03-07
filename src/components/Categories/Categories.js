import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {name: 'Lenovo', category: 'laptop'}, {name: 'ASUS', category: 'laptop'},{name: 'Dell', category: 'laptop'},
    {name: 'Samsung', category: 'mobile'}, {name: 'Nokia', category: 'mobile'},{name: 'Apple', category: 'mobile'},
    {name: 'Canon', category: 'camera'}, {name: 'Nikkon', category: 'camera'},{name: 'Sony', category: 'camera'}
]

const Categories = () => {
    const [category] = useContext(CategoryContext)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // console.log({category})
        const matchProducts = allProducts.filter(pd => pd.category === category)
        setProducts(matchProducts)
    }, [category])
    return (
        <div>
            <h3>Select your category: {category}</h3>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;