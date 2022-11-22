import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkout = useLoaderData();
    const { name} = checkout;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default CheckOut;