import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";


const Features = ({feature}) => {
    return (
        <div className='flex items-start'>
            <CheckCircleIcon className='h6 w-6 text-white'></CheckCircleIcon>
            <li className='m-0 list-none ms-2 text-white'>{feature}</li>
        </div>
    );
};

export default Features;