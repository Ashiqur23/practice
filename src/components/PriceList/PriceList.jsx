import React, { useEffect, useState } from 'react';

const PriceList = () => {
    const [prices, setPrices] =useState([])
    useEffect(()=>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h2 className='text-5xl text-center text-purple-950  bg-purple-300 font-bold p-4'>Awesome Affordable Prices</h2>
        </div>
    );
};

export default PriceList;