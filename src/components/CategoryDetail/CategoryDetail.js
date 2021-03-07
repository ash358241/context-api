import React from 'react';
// import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    console.log(props)
    const {name} = props.product;
    return (
        <div>
            <h4>This is your product details</h4>
            <p>Selected product: {name}</p>
        </div>
    );
};

export default CategoryDetail;