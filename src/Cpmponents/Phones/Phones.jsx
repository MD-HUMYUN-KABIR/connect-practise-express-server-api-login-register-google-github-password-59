import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>
            <ol>
            {phones.map(phone => <li key={phone.id}> <Link to={`/phone/${phone.id}`}> {phone.name} </Link> </li>)}
            </ol>
           
        </div> 
    );
};

export default Phones;