import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData()
    return (
        <div>
            <h3>Name : {phone.name}</h3>
              <h4>Price {phone.price}</h4>
           <img src={phone.image} alt="" />
           <p>{phone.description}</p>
        </div>
    );
};

export default Phone;