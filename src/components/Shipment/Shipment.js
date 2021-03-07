import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h2>Increment by clicking below!</h2>
            <button onClick={()=> setCategory(category+1)}>ClickMe</button>
        </div>
    );
};

export default Shipment;