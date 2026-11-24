import React from 'react';

function Product(props) {
    return (
        <div>
            <p>{props.name} - {props.price}</p>
            
        </div>
    );
}

export default Product;